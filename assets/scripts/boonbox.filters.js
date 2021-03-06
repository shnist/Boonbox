Boonbox.extend('filters', {
	/**
	 * Initialiser of the setup functionality of the filters
	 * @function
	 * @memberOf boonbox
	 */
	init : function () {
		$('#relationship').addClass('active');
		$('#age, #occasion, #interest, #price').addClass('hidden');
		
		Boonbox.filters.ui.init();
		Boonbox.filters.search.init();
	},
	/**
	 * Methods that deal with user interaction of the filter buttons
	 * and selectors
	 * @function
	 * @memberOf Boonbox.filters
	 */
	ui : {
		init: function () {
			$('#filter_selectors a, #filter_selectors p').click(function (e) {
				e.preventDefault();				
				var tab, activeTab;
				if($(this).is('p')){
					tab = $(this).children('a').attr('href');
				} else {
					tab = $(this).attr('href');
				}
				tab = tab.replace('#', '');
				
				if ($('.selected', '#filter_selectors').length === 0){
					$(this).parents('li').addClass('selected');
					$('#' + tab).slideDown(700, function () {
						$(this).removeClass('hidden').addClass('active');
					});
				} else {
					activeTab = $('.active', '#filter_options').attr('id');
				
					if (activeTab !== undefined){
						$('#filter_selectors li').removeClass('selected');
						$(this).parents('li').addClass('selected');
						$('.active', '#filter_options').slideUp(400, function () {
							$(this).removeClass('active').addClass('hidden');
							$('#' + tab).slideDown(700, function () {
								$(this).removeClass('hidden').addClass('active');
							});
						});
					}	
				}
			});
			$('.close', '.filter').click(function () {
				var $that = $(this);
				Boonbox.filters.ui.remove($that);
			});
			// slider 
			Boonbox.filters.ui.slider();
		},
		remove : function ($this) {
			$('.selected', '#filter_selectors').removeClass('selected');
			$this.parents('.filter').slideUp(800, function () {
				$(this).removeClass('active').addClass('hidden');
			});
			
		},
		slider : function () {
			$('#price .filter-options-detail').append('<div id="slider-range"></div>');
			$('#slider-range').slider({
				range: true,
				min: 0,
				max: 80,
				values: [ 5, 70 ],
				slide: function( event, ui ) {
					$('#price-range').attr('value', "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
					$('#lower-price').attr('value', $('#slider-range').slider('values', 0));
					$('#higher-price').attr('value', $('#slider-range').slider('values', 1));
				},
				change: function (event, ui) {
					var timer;
					clearTimeout(timer);
					timer = setTimeout(Boonbox.filters.search.delay, 1000);
				}
			});
			$('#price-range').attr('value', "£" + $('#slider-range').slider( "values", 0 ) +
				" - £" + $('#slider-range').slider( "values", 1 ) );
			$('#lower-price').attr('value', $('#slider-range').slider('values', 0));
			$('#higher-price').attr('value', $('#slider-range').slider('values', 1));
		}
	},
	/**
	 * Methods to initialise all aspects of querying the database
	 * and displaying the results
	 * @class
	 * @memberOf Boonbox.filters
	 */
	search : {
		init : function () {
			// remove the submit button
			$('#filter_options input[type=submit]').addClass('hidden');
			
			// initialise submit event binding
			Boonbox.filters.submit.init();
			
			// the delay is used to try and reduce the number of queries
			var timer;
			$('#filter_options input').click(function (event){
				clearTimeout(timer);
				timer = setTimeout(Boonbox.filters.search.delay, 1000);
			});
		},
		delay : function () {
			Boonbox.filters.submit.triggerSubmit();
		}
	},
	/**
	 * Methods to deal with the querying of the database with AJAX
	 * @class
	 * @memberOf Boonbox.filters
	 */
	submit : {
		init : function () {
			$('#filter_options form').submit(function (event) {
				event.preventDefault();
				var searchOptions = $(this).serialize();
				Boonbox.filters.dom.init(searchOptions);
			});
		},
		triggerSubmit : function () {
			$('#filter_options form').submit();	
		}
	},
	/**
	 * Methods relating to the ajax request to the php file
	 * @class
	 * @memberOf Boonbox.filters
	 */
	ajax : {
		init : function (searchOptions) {
			$('#results_top').after(
				'<div class="overlay">' +
					'<img src="../../assets/images/loader.gif" alt="products loading" class="loader">' +
				'</div>'
			);
			$('#content.results').addClass('ajax');
			Boonbox.filters.ajax.request(searchOptions);
		},
		request : function (searchOptions) {
			$.ajax({
				url : '../../assets/scripts/request.php',
				data: searchOptions,
				dataType: 'json',
				success : function (data) {
					$('.overlay').remove();
					$('#content.results').removeClass('ajax');
					// results stored here
					Boonbox.results = data;
					Boonbox.filters.dom.resetResults();
					Boonbox.filters.dom.addResults(data, 1);
				},
				error: function (object, stat, error) {
					//console.log(stat + ': ' + error);
				}
			});
		}
	},
	results : {
		ui : {
			init : function (results){
				Boonbox.filters.results.ui.slide();
				Boonbox.filters.results.viewAll.ui(results);
				Boonbox.filters.results.resetPage.ui();
			},
			/**
			 * Method that implements slide up and down for
			 * each result item
			 * @function
			 * @memberOf Boonbox.filters.results
			 */
			slide : function () {
				$('#results_main a').mouseenter(function (event) {
					event.stopPropagation();
					$('.product_desc', this).slideDown(400);				
				}).mouseleave(function (event) {
					event.stopPropagation();
					$('.product_desc', this).slideUp(400);
				});
			},
			/**
			 * Method that handles the pagination ui
			 * @function
			 * @memberOf Boonbox.filters.results
			 */ 
			pagination : function(){
				$('#pagination a').click(function (event) {
					event.preventDefault();
					if ($(this).parent('li').hasClass('disabled') !== true){
						var clicked = $(this).parent().prop('class').replace('page-', ''),
							currentPage = $('#pagination .selected').parent().prop('class').replace('page-', ''),
							lastPage = $('#pagination li').eq($('#pagination li').length - 1).prop('class').replace('page-', ''),
							newPage;
						
						if (clicked === 'prev'){
							newPage = Number(currentPage) - 1;						
						} else if (clicked === 'next'){
							newPage = Number(currentPage) + 1;
						} else {
							newPage = Number(clicked);
						}
						// adjust dom to simulate new page
						Boonbox.filters.dom.newPage(newPage);
					}
				});
			}
		},
		/**
		* Method that handles the functionality of the view all button
		* @function
		* @memberOf Boonbox.filters.results
		*/
		viewAll : {
			ui : function (results) {
				$('#view-all').click(function (event) {
					event.preventDefault();
					Boonbox.filters.results.viewAll.reset(results);				
					//Boonbox.filters.results.viewAll.stickyHeader();
					// remove it
					$(this).unbind('click').addClass('disabled');
				});	
			},
			reset : function (results) {
				// remove pagination
				$('#pagination').remove();
				$('#results_main').empty();
				
				var max = 16;
				if(results.length < 16){
					max = 13;
				}
				Boonbox.filters.dom.productMarkup(0, max, results);
				Boonbox.filters.results.viewAll.scroll(results, max);
			},
			//stickyHeader : function () {
			//	$(window).scroll(function () {
			//		var scrollTop = $(window).scrollTop();
			//		if (scrollTop > 185){
			//			console.log('sticky');
			//			if($('#filters').hasClass('active') !== true){
			//				$('#filters').addClass('active');
			//			}
			//		} else if(scrollTop < 185) {
			//			console.log('turn off sticky');
			//			$('#filters').removeClass('active');
			//		}
			//	
			//	});			
			//},
			scroll : function (results, max) {
				var containerHeight = $(window).height(),
					// counter to know which products need adding
					pageNumber = 1, itemsPerPage = 12, paginationNumber = Math.ceil(results.length / 12);
					Boonbox.filters.results.viewAll.loading = false;
				$(window).scroll(function () {
					var scrollTop = $(window).scrollTop(),
						min, timer;
				
					if (Boonbox.filters.results.viewAll.loading !== true){				
						if((scrollTop + 850) > containerHeight){							
							pageNumber = pageNumber + 1;
							min = (pageNumber * itemsPerPage) - itemsPerPage;
							if (paginationNumber === pageNumber){
								max = results.length;
								// unbind the scroll
								$(window).unbind('scroll');
							} else {
								max = max + (itemsPerPage + 1);
							}
							Boonbox.filters.results.viewAll.loading = true;
							Boonbox.filters.results.viewAll.addLoader();
							timer = setTimeout(function () {
								Boonbox.filters.dom.productMarkup(min, max, results, function (loaded) {
									if(loaded === 'done'){
										Boonbox.filters.results.viewAll.removeLoader();
									}
								});
							}, 1500);
						}
					}
				});
			},
			addLoader : function () {
				$('#content').append('<div id="new-content">' +
								'<img src="../../assets/images/view_all_loader.gif" alt="products loading" class="loader">' +
									'</div>'
								);
			},
			removeLoader : function () {
				Boonbox.filters.results.viewAll.loading = false;
				$('#new-content').remove();
			}
			
		},
		/**
		 * Method that handles the reset page functionality
		 * @function
		 * @memberOf Boonbox.filters
		*/
		resetPage : {
			ui : function () {
				$('#reset-selection').click(function (e) {
					e.preventDefault();
					$('#results_top').remove();
					$('#results_main').remove();
					$('#pagination').remove();
					$('#filter_options li input').prop('checked', false);
					$('#content').removeClass('results');
					
					$('#content').append(Boonbox.filters.emptiedContent);
				});
			}		
		}
	},
	dom : {
		init : function (searchOptions) {
			if ($('#content.results').length === 0){
				$('#content').addClass('results');
				Boonbox.filters.emptiedContent = $('#content').children().detach();
				Boonbox.filters.dom.addResultsTemplate();
			}
			Boonbox.filters.ajax.init(searchOptions);
		},
		/* add the results template */
		addResultsTemplate : function () {
			$('#content').append(
				'<div id="results_top" class="clear">' +
					'<div class="results_context">' +
						'<h3>Results</h3>' +
						'<p>Boonbox selector is searching...</p>' +
					'</div>' +
				'</div>' +
				'<ul id="results_main" class="clear no-js">'+
				'</ul>'
			);
			
			$('#results_main').removeClass('no-js');
		},
		addResults : function (results, pageNumber) {
			// first say how many have been created
			$('.results_context p').html('Boon selector has found ' + results.length + ' items');
			var i = 0, j = 0, paginationMarkUp = '', itemsPerPage = 12, maxProducts = itemsPerPage * pageNumber,
				header = '', paginationNumber;
			
			if (results.length !== 0){
				// creating pagination if necessary
				if (results.length > 12){
					paginationNumber = Math.ceil(results.length / 12);
	
					paginationMarkUp = '<ul id="pagination" class="clear">';
					if (pageNumber === 1){
						paginationMarkUp += '<li class="prev disabled"><a href="#prev">Previous</a></li>';
					} else {
						paginationMarkUp += '<li class="prev"><a href="#prev">Previous</a></li>';
					}
					for (j; j < paginationNumber; j = j + 1){
						paginationMarkUp += '<li class="page-' + (j + 1) + '"><a href="#' + (j + 1) + '">' + (j + 1) + '</a></li>';
					}
					if (pageNumber === paginationNumber){
						paginationMarkUp += '<li class="next disabled"><a href="#next">Next</a></li>';
					} else {
						paginationMarkUp += '<li class="next"><a href="#next">Next</a></li>';
					}
					paginationMarkUp += '</ul>';
						
					$('#content').append(paginationMarkUp);
					//console.log();
					// add selected class to last pagination number
					$('#pagination .page-' + pageNumber + ' a').addClass('selected');	
					// initialise event binding
					Boonbox.filters.results.ui.pagination();
									
				} else {
					maxProducts = results.length;
				}
							
				// setting i depending on page number
				if (pageNumber !== 1){
					i = (pageNumber * itemsPerPage) - itemsPerPage;
				}
				
				// checking if this is the last page, if so then set maxProducts to results.length
				if(pageNumber === paginationNumber){
					maxProducts = results.length;
				}
				Boonbox.filters.dom.productMarkup(i, maxProducts, results);
				
				if (results.length > 12){
					header = '<li><a href="#" id="view-all">View All</a></li>';
				} 
				
				// add header options
				$('.results_context').after(
						'<ul>' +
							 header +
							'<li><a href="#" id="reset-selection">Reset Selection</a></li>' +
							'<li class="drop_down">Sort By:' + 
								'<select>' +
									'<option value="price-low">Price, low to high</option>' +
									'<option value="price-high">Price, high to low</option>' +
									'<option value="relevance">Relevance</option>' +
									'<option value="selling">Best Selling</option>' +
									'<option value="reviews">Best Reviews</option>' +
								'</select>' +
							'</li>' +
						'</ul>');
				
				// start the ui for the results
				Boonbox.filters.results.ui.init(results);
			}
		},
		/**
		 * Method that appends product mark up
		 */
		productMarkup : function (i, maxNo, results, callback) {
			var productMarkUp = '';
			// creating the mark up for products
			for (i; i < maxNo; i = i + 1){
				productMarkUp = productMarkUp +
					'<li>' +
						'<a href="#">' +
							'<img src="' + String(results[i].image) + '" alt="' + results[i].name + '">' +
							'<div class="product_desc">' +
								'<h4>' + results[i].name + '</h4>' +
								'<p class="price">£' + results[i].price + '</p>' +
								'<img src="../../assets/images/star' + results[i].rating + '.png">' +
							'</div>' +
						'</a>' +
					'</li>';
			}
			$('#results_main').append(productMarkUp);
			
			if(callback !== undefined){
				callback('done');
			}
				
			Boonbox.filters.results.ui.init(results);

		},
		/**
		 * Method that resets the DOM if results already exist
		 * @function
		 * @memberOf Boonbox.filters.dom
		 */
		resetResults : function (){
			if ($('#results_main li').length !== 0){
				$('#results_main').empty();
				$('#pagination').remove();
				$('#results_top ul').remove();
			}
		},
		newPage : function(page){
			Boonbox.filters.dom.resetResults();
			Boonbox.filters.dom.addResults(Boonbox.results, page);
		}
	}
});
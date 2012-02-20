Boonbox.extend('filters', {
	/**
	 * Initialiser of the setup functionality of the filters
	 * @function
	 * @memberOf boonbox
	 */
	init : function (){
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
				var tab;
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
					var activeTab = $('.active', '#filter_options').attr('id');
				
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
				max: 500,
				values: [ 15, 300 ],
				slide: function( event, ui ) {
					$('#price-range').val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
				},
				change: function (event, ui) {
					var timer;
					clearTimeout(timer);
					timer = setTimeout(Boonbox.filters.search.delay, 1000);
				}
			});
			$('#price-range').val("$" + $('#slider-range').slider( "values", 0 ) +
				" - £" + $('#slider-range').slider( "values", 1 ) );
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
					console.log(stat + ': ' + error);
				}
			});
		}
	},
	results : {
		ui : {
			init : function (results){
				Boonbox.filters.results.ui.slide();
				Boonbox.filters.results.viewAll.ui(results);
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
					var clicked = $(this).attr('href'),
						currentPage = $('#pagination .selected').attr('href'),
						lastPage = $('#pagination li').eq($('#pagination li').length - 1).children('a').attr('href'),
						newPage;
						
					clicked = clicked.replace('#', '');
					currentPage = currentPage.replace('#', '');
					lastPage = lastPage.replace('#', '');
					
					if (clicked === 'prev'){
						newPage = Number(currentPage) - 1;						
					} else if (clicked === 'next'){
						newPage = Number(currentPage) + 1;
					} else {
						newPage = Number(clicked);
					}
					// adjust dom to simulate new page
					Boonbox.filters.dom.newPage(newPage);
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
					Boonbox.filters.results.viewAll.scroll();
				
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
				$('#results_main').addClass('scrolling');
			},
			scroll : function () {
				var containerHeight = $('#results_main').innerHeight();
					
				$('#results_main').scroll(function () {
					
					var scrollTop = $('#results_main').scrollTop();
					console.log('scroll top: ' + scrollTop);
					console.log('container height: ' + containerHeight);
				})
				
			}
		}
	},
	dom : {
		init : function (searchOptions) {
			if ($('#content.results').length === 0){
				$('#content').addClass('results');
				$('#content').empty();
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
			var i = 0, j = 0, paginationMarkUp = '', itemsPerPage = 12, maxProducts = itemsPerPage * pageNumber;
			
			// creating pagination if necessary
			if (results.length > 12){
				var paginationNumber = Math.ceil(results.length / 12);

				paginationMarkup = '<ul id="pagination" class="clear">';
				if (pageNumber === 1){
					paginationMarkup = paginationMarkup + '<li class="prev disabled"><a href="#prev">Previous</a></li>';
				} else {
					paginationMarkup = paginationMarkup + '<li class="prev"><a href="#prev">Previous</a></li>';
				}
				for (j; j < paginationNumber; j = j + 1){
					paginationMarkup = paginationMarkup + '<li><a href="#' + (j + 1) + '">' + (j + 1) + '</a></li>';
				}
				if (pageNumber === paginationNumber){
					paginationMarkup = paginationMarkup + '<li class="next disabled"><a href="#next">Next</a></li>';
				} else {
					paginationMarkup = paginationMarkup + '<li class="next"><a href="#next">Next</a></li>';
				}
				paginationMarkup = paginationMarkup + '</ul>';
					
				$('#content').append(paginationMarkup);
				
				// add selected class to last pagination number
				$('#pagination a[href=#'+pageNumber+']').addClass('selected');	
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
			
			// add header options
			$('.results_context').after(
					'<ul>' +
						'<li><a href="#" id="view-all">View All</a></li>' +
						'<li><a href="#">Reset Selection</a></li>' +
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
		},
		/**
		 * Method that appends product mark up
		 */
		productMarkup : function (i, maxNo, results) {
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
					'</li>'
			}
			$('#results_main').append(productMarkUp);
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
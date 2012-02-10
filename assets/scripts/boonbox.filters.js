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
					console.log('animating here');
					$('#' + tab).slideDown(1000, function () {
						$(this).removeClass('hidden').addClass('active');
					});
				} else {
					var activeTab = $('.active', '#filter_options').attr('id');
				
					if (activeTab !== undefined){
						$('#filter_selectors li').removeClass('selected');
						$(this).parents('li').addClass('selected');
						$('.active', '#filter_options').slideUp(700, function () {
							$(this).removeClass('active').addClass('hidden');
							$('#' + tab).slideDown(1000, function () {
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
			$this.parents('.filter').slideUp(1000, function () {
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
				Boonbox.filters.submit.dom.init(searchOptions);
			});
		},
		triggerSubmit : function () {
			$('#filter_options form').submit();	
		},
		dom : {
			init : function (searchOptions) {
				if ($('#content.results').length === 0){
					$('#content').addClass('results');
					$('#content').empty();
					Boonbox.filters.submit.dom.addResultsTemplate();
				}
				Boonbox.filters.ajax.init(searchOptions);
			},
			/* add the results template */
			addResultsTemplate : function () {
				$('#content').append(
					'<div id="results_top" class="clear">' +
						'<div class="results_context">' +
							'<h3>Results</h3>' +
						'</div>' +
						'<ul>' +
							'<li><a href="#">View All</a></li>' +
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
						'</ul>' +
					'</div>' +
					'<ul id="results_main" class="clear">'+
					'</ul>'
				);
			},
			addResults : function (results) {
				// first say how many have been created
				$('.results_context').append('<p>Boon selector has found ' + results.length + ' items</p>');
				
				// creating the mark up
				var i = 0, markUp = '';
				for (i; i < results.length; i = i + 1){
					markUp = markUp +
						'<li>' +
							'<a href="#">' +
								'<img src="' + results[i].image + '" alt="' + results[i].name + '">' +
								'<div class="product_desc">' +
									'<h4>' + results[i].name + '</h4>' +
									'<p class="price">£' + results[i].price + '</p>' +
									'<img src="../../assets/images/star' + results[i].rating + '.png">' +
								'</div>' +
							'</a>' +
						'</li>'
				}
				$('#results_main').append(markUp);
			}
		}
	},
	/**
	 * Methods relating to the ajax request to the php file
	 * @class
	 * @memberOf Boonbox.filters
	 */
	ajax : {
		init : function (searchOptions) {
			$('#results_main').append('<img src="../../assets/images/loader.gif" alt="products loading" class="loader">');
			Boonbox.filters.ajax.request(searchOptions);
		},
		request : function (searchOptions) {
			$.ajax({
				url : '../../assets/scripts/request.php',
				data: searchOptions,
				dataType: 'json',
				success : function (data) {
					$('#results_main .loader').remove();
					Boonbox.filters.submit.dom.addResults(data);
				}
			});
		}
	}
});
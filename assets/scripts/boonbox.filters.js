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
	},
	ui : {
		init: function () {
			$('#filter_selectors a, #filter_selectors p').click(function (e) {
				e.preventDefault();
				// changing selected states of filter buttons
				$('#filter_selectors li').removeClass('selected');
				$(this).parents('li').addClass('selected');
				
				
				var tab;
				if($(this).is('p')){
					tab = $(this).children('a').attr('href');
				} else {
					tab = $(this).attr('href');
				}
				tab = tab.replace('#', '');
			
				var activeTab = $('.active', '#filter_options').attr('id');
				
				if (tab !== activeTab){
					$('.active', '#filter_options').slideUp(1000, function () {
						$(this).removeClass('active').addClass('hidden');
						$('#' + tab).slideDown(1500, function () {
							$(this).removeClass('hidden').addClass('active');
						});
					});
					if ($('.active', '#filter_options').length === 0){
						$('#' + tab).slideDown(1500, function () {
							$(this).removeClass('hidden').addClass('active');
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
	}

});
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
					$('.active', '#filter_options').removeClass('active').addClass('hidden');
					$('#' + tab).removeClass('hidden').addClass('active');
				}
			});
			$('.close', '.filter').click(function () {
				var $that = $(this);
				Boonbox.filters.ui.remove($that);
			});
		},
		remove : function ($this) {
			//$this.parents('.filter').removeClass('active').addClass('hidden');
			
		}
	}

});
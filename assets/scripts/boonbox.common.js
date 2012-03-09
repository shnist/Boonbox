/*!
    Boonbox
    Common JavaScript for Boonbox sites

    JSDoc notation
    
    @version 0.1
    @author Boonbox - http://www.boonbox.co.uk
    @requires jQuery Core 1.7+ - http://www.jquery.com/
*/

/**
 * @namespace Namespace for all common functionality for the site 
 * @memberOf boonbox
 */

var Boonbox = {
	
	/**
	 * Extends the Boonbox object with the intended object
	 * @function
	 * @memberOf Boonbox
	 * @name {String} The namespace the object should be dropped into
	 * @obj {Object} The object
	 */
	extend: function (name, object) {
		
		if (this[name] === undefined) {
			this[name] = object;
		}
		
	}
};

Boonbox = window.Boonbox;


Boonbox.extend('common', {
	/**
	 * Initialiser of common functionality across the site
	 * @function
	 * @memberOf boonbox
	 */
	init : function () {
		this.basket.ui();
		this.topBuys.init();
		this.carousel.init();
		if ($.support.opacity !== true) {
			this.placeholder();
		}
		this.mailingList();
		if ($.browser.msie && $.browser.version === "7.0") {
			this.ie7Fixes.init($("body"));
		}
	},
	basket : {
		ui : function () {
			// first hide the basket by default 
			$('#mini-basket').addClass('hidden');
			
			var timer;
			$('#basket-summary a').mouseenter(function (event) {
				clearTimeout(timer);
				Boonbox.common.basket.add();
				event.stopPropagation();
			}).mouseleave(function (event) {
				timer = setTimeout(Boonbox.common.basket.remove, 600);
				event.stopPropagation();
			});
			$('#mini-basket').mouseenter(function (event) {
				clearTimeout(timer);
				event.stopPropagation();
			});
			$('#mini-basket').mouseleave(function (event) {
				timer = setTimeout(Boonbox.common.basket.remove, 600);
				event.stopPropagation();
			});
			
			$('.close', '#mini-basket').click(function (e) {
				var $item = $(this).parents('li');
				Boonbox.common.basket.removeItem($item);
				e.preventDefault();
			});
		},
		add : function () {
			$('#mini-basket').slideDown(800, function () {
				$(this).removeClass('hidden');
			});
		},
		remove : function () {
			$('#mini-basket').slideUp(400, function () {
				$(this).addClass('hidden');
			});
		},
		removeItem : function ($item) {
			$item.fadeOut(1000, function () {
				$(this).remove();
				// update basket total
				Boonbox.common.basket.updateBasketTotal();	
			});
		},
		updateBasketTotal : function () {
			var total = 0;
			$('#mini-basket .price').each(function () {
				var price = Number($(this).html().replace('£', ''));
				total = total + price;
			});
			$('#basket-summary span').html('(£' + total + ')');
			$('#mini-basket h3 span').html('£' + total + '.00');
		}
	},
	topBuys : {
		init : function () {
			$('.month, .year', '.top-section').addClass('hidden');
			$('.week', '.top-section').addClass('active');
			$('.top-links a[href=#week]', '.top-section').addClass('active');
			Boonbox.common.topBuys.ui();
		},
		ui : function () {
			$('.top-links a', '.top-section').click(function (e) {
				e.preventDefault();
				var tab, activeTab;
				
				$('.top-links a', '.top-section').removeClass('active');
				$(this).addClass('active');
				
				tab = $(this).attr('href');
				tab = tab.replace('#', '');
				
				activeTab = $('ul.active', '.top-section').attr('class');
				activeTab = activeTab.split(' ');
				activeTab = activeTab[1];
				
				if (tab !== activeTab) {
					$('.top-gifts', '.top-section').removeClass('active').addClass('hidden');
					$('.top-gifts', '.top-section').siblings('h2').removeClass('active').addClass('hidden');
					$('.' + tab + ',' + '.top-section').removeClass('hidden').addClass('active');
				}
			});
		}
	},
	placeholder : function () {
		// local reference to the element
		var placeholderEl = $('[placeholder]');
		$(placeholderEl).focus(function () {
			// re-localised for the function's scope
			var input = $(this);
			if (input.val() === input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function () {
			var input = $(this);
			if (input.val() === '' || input.val() === input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur(); // this initialises the fields
		
		// prevents the values of the placeholder from attaching themselves
		// to the form action script
		$(placeholderEl).parents('form').submit(function () {
			$(this).find('[placeholder]').each(function () {
				var input = $(this);
				if (input.val() === input.attr('placeholder')) {
					input.val('');
				}
			});
		});		
	},
	carousel : {
		init : function () {
			$('.carousel-small').removeClass('no-js');
			$('.carousel, .carousel-small').before('<a href="#" class="prev"></a>').after('<a href="#" class="next"></a>');
			Boonbox.common.carousel.slide();
			Boonbox.common.carousel.startCarousel();
		},
		/**
		 * Method that does the slide stuff for the product items
		 * @function
		 * @memberof Boonbox.common.carousel
		 */ 
		slide: function () {
			$('.carousel-small a').mouseenter(function (event) {
				event.stopPropagation();
				$('.product_desc', this).slideDown(400);				
			}).mouseleave(function (event) {
				event.stopPropagation();
				$('.product_desc', this).slideUp(400);
			});
		},
		startCarousel : function () {
			$('.carousel').carouFredSel({
				items : 1,
				scroll: 1,
				width: 731,
				height: 419,
				auto : {
					play: false
				},
				prev : {
					button: '.carousel-wrapper .prev',
			        key: 'left'
				},
				next : {
					button: '.carousel-wrapper .next',
					key: 'right'
				}
			});
			$('.carousel-small').carouFredSel({
				items : 4,
				scroll: 4,
				width: 918,
				height: 205,
				auto : {
					play: false
				},
				prev : {
					button: '.carousel-small-wrapper .prev',
			        key: 'left'
				},
				next : {
					button: '.carousel-small-wrapper .next',
					key: 'right'
				}
			});
		}
	},
	mailingList : function () {
		$('#mailing-list input[type=submit]').addClass('hidden');
	},
	ie7Fixes: {
		init: function ($context) {
			var $elements = $context.find('#basket')
				.find('#basket-mini')
				.find('#filter_selectors li p a')
				.find('#filter_options p.close');
			this.customZIndex($elements);
		},
		customZIndex: function ($elements) {
			$elements.each(function (i) {
				alert($(this));
				$(this).css('zIndex', ($elements.length - i));
			});
		}		
	}
});
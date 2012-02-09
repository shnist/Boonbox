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
	extend: function (name, object){
		
		if (this[name] === undefined){
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
	init : function(){
		this.basket.ui();
	},
	basket : {
		ui : function (){
			// first hide the basket by default 
			$('#mini-basket').addClass('hidden');
			
			var timer;
			$('#basket-summary a').mouseenter(function (event) {
				clearTimeout(timer);
				Boonbox.common.basket.add();
				event.stopPropagation();
			}).mouseleave(function (event){
				timer = setTimeout(Boonbox.common.basket.remove, 700);
				event.stopPropagation();
			})
			$('#mini-basket').mouseenter(function (event){
				clearTimeout(timer);
				event.stopPropagation();
			});
			$('#mini-basket').mouseleave(function (event) {
				timer = setTimeout(Boonbox.common.basket.remove, 700);
				event.stopPropagation();
			});
		},
		add : function (){
			$('#mini-basket').slideDown(1000, function(){
				$(this).removeClass('hidden');
			});
		},
		remove : function (){
			$('#mini-basket').slideUp(1000, function(){
				$(this).addClass('hidden');
			});
		}
	}
});

$('document').ready(function () {
	Boonbox.common.init();
});
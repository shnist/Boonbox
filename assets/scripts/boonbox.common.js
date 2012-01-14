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

(function () {
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
	
}());

Boonbox.extend('common', {
	/**
	 * Initialiser of common functionality across the site
	 * @function
	 * @memberOf boonbox
	 */
	init : function(){
		
	}

});
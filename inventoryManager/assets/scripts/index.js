/**
	Boonbox backbone work 
	Inventory manager
*/

var Product = Backbone.Model.extend({
	// default attributes for product
	defaults: {
		name: 'Product',
		price: '10.00',
		tags: ['boy', 'girl'],
		viewed: false
	},
	// validation method for the attributes of the model
	// must come first
	validate: function (attributes){
		if(attributes.src === undefined){
			return 'Remember to attach an image to your product!';
		}
	},
	// this method is fired on initialisation
	initialize: function () {
		// error handling for validation
		this.on('error', function (model, error){
			console.log(error);
		});
		// event listeners for attributes
		this.on('change:src', function (){
			var src = this.get('src');
			console.log('Image source changed to ' + src);
		});
		this.on('change:name', function (){
			var name = this.get('name');
			console.log('Image name changed to ' + name);
		});
	},
	// custom methods for the model
	changeSource: function (source){
		this.set({src: source});
	},
	changeName: function (name){
		this.set({name: name});
	}
});


var ProductSearch = Backbone.View.extend({
	el: '#results',
	render: function (event){
		var compiledTemplate = _.template($('#results-template').html());
		this.$el.html(compiledTemplate(this.model.toJSON()));
		return this; // recommended as this enables calls to be chained
	},
	events: {
		'submit #searchForm': 'search',
		'click .reset': 'reset',
		'click .advanced': 'switchContext'
	},
	search: function (event){
		// executed when a search form is submitted
	},
	reset: function (event){
		// executed when an element with class reset has been clicked
	},
	switchContext: function (event){
		// executed when an element with class advanced has been clicked
	}
});

var ProductCollection = new Backbone.Collection;
ProductCollection.url = '/products';
ProductCollection.fetch();

console.log(ProductCollection);
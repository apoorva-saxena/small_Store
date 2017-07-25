(function () {
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		this.products = gems
	});

	app.controller('PanelController', function() {
		this.tab = 1

		this.selectTab = function(setTab) {
			this.tab = setTab
			console.log(this.tab)
		}

		console.log(this.tab)
		this.isSelected = function(checktab) {
			return this.tab === checktab
		}
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description : "-------.......",
		can_purchase: true,
		soldOut: false  
	},
	{
   		name : "Diamond",
   		price: 890.78,
   		description: "just a diamond",
   		can_purchase: true,
   		soldOut: false 
	}]


})();


// (function(){
//   var gem = { name: 'Azurite', price: 2.95 };
//   var app = angular.module('gemStore', []);
//   app.controller('StoreController', function() {
    
//   });
// })();
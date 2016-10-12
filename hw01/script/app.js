(
function(){

'use strict';

angular
.module('LunchCheck',[])
.controller('LunchCheckController',
	function($scope,$filter){
		var vm = this;


		vm.$inject=['$scope'];
		
		vm.dishes = '';

		vm.onCheck = function(e) {
			
			if (vm.dishes === '')
			{
				vm.message="Please enter data first";
				return;
			}

			var dishes = vm.dishes.split(',');

			vm.message = dishes.length < 4 ? 'Enjoy!':'Too much!';
		}

	});
}
)();
angular.module('glossaryExample', ['angular-glossary'])
	.controller('glossaryCtrl', ['$scope', '$http', function($scope, $http){
		$scope.terms = [
			{
				term: 'Banana',
				definition: 'A long, yellow fruit that monkeys love to eat.'
			},
			{
				term: 'Apple',
				definition: 'A round, green or red fruit that crunches when you bite it.'
			},
			{
				term: 'Watermelon',
				definition: 'A very large round fruit that\'s green on the outside and red on the inside.'
			},
			{
				term: 'Grape',
				definition: 'Small round, red or green fruits on a bunch.'
			},
			{
				term: 'Strawberry',
				definition: 'Small red, tri-AngularJS fruit with seeds on the outside.'
			}
		];
	}]);
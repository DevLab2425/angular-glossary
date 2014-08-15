var Glossary = angular.module('angular-glossary', ['template/glossary.html']);

Glossary.directive('glossary', function(){
	return {
		scope:{
			terms: '@'
		},
		restrict: 'EA',
		replace: true,
		templateUrl: 'template/glossary.html',
		controller: function ($scope, $http){
			
			var _alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			
			$scope.createAlphaList = function(terms){
				var list = [];
				angular.forEach(terms, function(term){
					var _alpha = term.term.charAt(0);
					if(list.indexOf(_alpha) === -1){
						list.push(_alpha);
					}
				});
				
				return list.sort();
			};
			
			$scope.selectTerms = function(alpha){
				$scope.filterAlpha = (alpha) ? alpha.toLowerCase() : undefined;
			};
			
			
			
		},
		controllerAs: 'glossaryCtrl',
		link: function($scope, iElm, iAttrs, glossaryCtrl) {
			$scope.alphaList = $scope.createAlphaList(angular.fromJson(iAttrs.terms));
			$scope.selectedTerms = angular.fromJson(iAttrs.terms);
		}
	};
});

Glossary.filter('startswith', function(){
	return function(input, alpha){
		var _out = [];

		if(angular.isUndefined(alpha)){
			_out = input;
		}
		
		angular.forEach(input, function(item){
			if(item.term.charAt(0).toLowerCase() === alpha){
				_out.push(item);
			}
		});
		
		return _out;
	};
});

angular.module('template/glossary.html', [])
	.run(['$templateCache', function($templateCache){
		$templateCache.put('template/glossary.html', 
			'<div class="glossary">' +
			'<div class="alpha-wrap">' +
				'<ul class="alpha-list">' +
					'<li class="alpha-item" ng-class="{\'active\':!filterAlpha}"><a href ng-click="selectTerms()">All</a></li>' +
					'<li class="alpha-item" ng-class="{\'active\':alpha.toLowerCase() === filterAlpha}" ng-repeat="alpha in alphaList">' +
						'<a href ng-click="selectTerms(alpha)">{{alpha}}</a>' +
					'</li>' +
				'</ul>' +
			'</div>' +
			'<div class="definition-wrap">' +
				'<div class="definition-item">' +
					'<dl ng-repeat="term in selectedTerms | startswith: filterAlpha | orderBy: \'term\'">' +
						'<dt>{{term.term}}</dt>' +
						'<dd>{{term.definition}}</dd>' +
					'</dl>' +
				'</div>' +
			'</div>' +
		'</div>'
		);
	}]);
	
	

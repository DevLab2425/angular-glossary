var Glossary = angular.module('angular-glossary', ['starts-with-filter', 'template/glossary.html']);

Glossary.directive('glossary', function(){
	return {
		scope:{
			terms: '@',
			termProperty: '@'
		},
		restrict: 'EA',
		replace: true,
		templateUrl: 'template/glossary.html',
		controller: function ($scope, $http){
			
			$scope.createAlphaList = function(terms, property){
				var list = [];
				angular.forEach(terms, function(term){
					term = term[property] || term;
					var _alpha = term.charAt(0);
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
			if(!iAttrs.termProperty){
				//console.warn('Missing Attribute: term-property required. Using default value "term"');
				iAttrs.termProperty = 'term';
			}
			
			$scope.alphaList = $scope.createAlphaList(angular.fromJson(iAttrs.terms), iAttrs.termProperty);
			$scope.selectedTerms = angular.fromJson(iAttrs.terms);
			
		}
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
					'<dl ng-repeat="term in selectedTerms | startswith: filterAlpha : \'term\' | orderBy: \'term\'">' +
						'<dt>{{term.term}}</dt>' +
						'<dd>{{term.definition}}</dd>' +
					'</dl>' +
				'</div>' +
			'</div>' +
		'</div>'
		);
	}]);
	
	

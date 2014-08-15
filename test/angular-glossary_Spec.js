describe('Angular Glossary', function(){
	var $scope, $compile;
	
	var baseTemplate = '<glossary terms="{{mockTerms}}"></glossary>';
	
	beforeEach(module('angular-glossary'));
	
	beforeEach(inject(function($rootScope, _$compile_){
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$scope.mockTerms = [{term: 'Apple', definition: 'A red fruit'}];
	}));
	
	function compileDirective(template, scope){
		var elm = angular.element(template);
		$compile(elm)(scope);
		scope.$apply();
		return elm;
	}
	
	describe('Alpha List', function(){
		var elm;
		
		beforeEach(function(){
			elm = compileDirective(baseTemplate, $scope);
		});
		
		it('should create an unordered list of single characters', function(){
			expect(elm.children('ul.alpha-list li').length).toBe(2);
		});
		
		it('should create a DL for each term item', function(){
			expect(elm.find('dl').length).toBe(1);
		});
	});
});
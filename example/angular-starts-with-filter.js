var Filter = angular.module('starts-with-filter', []);

Filter.filter('startswith', function(){
	return function(input, alpha, property){
		
		var _out = [];

		if(angular.isUndefined(alpha)){
			_out = input;
		}
		
		angular.forEach(input, function(item){
			var filteritem = item;
			if(angular.isDefined(property) && item[property]){
				filteritem = item[property];
			}
			if(filteritem.charAt(0).toLowerCase() == alpha){
				_out.push(item);
			}
		});
		return _out;
	};
});
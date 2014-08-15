#angular-glossary
[![NPM version](https://badge.fury.io/js/angular-glossary.svg)](http://badge.fury.io/js/angular-glossary)
[![Bower version](https://badge.fury.io/bo/angular-glossary.svg)](http://badge.fury.io/bo/angular-glossary)
[![Github version](https://badge.fury.io/gh/angular-glossary.svg)](http://badge.fury.io/gh/angular-glossary)

A directive that outputs a glossary based on a collection of terms.

## Installation

Download [angular-glossary.min.js](#) or install with bower

```BASH
$ bower install angular-glossary --save
```

Load `angular-glossary.min.js`, then add the `angular-glossary` module to your application.

```javascript
angular.module('yourApp', ['angular-glossary']);
```

## Usage
### HTML
```html
<body ng-app="glossaryExample">
	<div ng-controller="glossaryCtrl">
		<glossary terms="{{terms}}"></glossary>
	</div>
</body>
```

### Javascript
```javascript
angular.module('glossaryExample', ['angular-glossary'])
	.controller('glossaryCtrl', ['$scope', function($scope){
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
```

## Example
The example app can be launched using a simple web server, however, it is dependent on a CDN hosted instance of Angular. You'll need to localize Angular to run completely local.

## Development

Testing is done using Karma Test Runner.

```BASH
$ grunt test
```
	
## Build

```BASH
$ grunt build
```
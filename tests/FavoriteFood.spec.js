describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function () {
		var mockedList = [{
			name: 'Test',
			favoriteFood: 'Bread'
		}, {
			name: 'Test 2',
			favoriteFood: 'Apples'
		}, {
			name: 'Test 3',
			favoriteFood: 'Carrots'
		}];

		var results = $filter('favoriteFood')(mockedList, 'Apples');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Test 2');
	});
});

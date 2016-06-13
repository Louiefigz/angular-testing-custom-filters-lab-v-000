function removeAllVowels() {
	return function (str) {
		return str.replace(/[aeiou]/gi, '');
	};

	it('should filter and replace all vowels ', function () {
		var mockedList = [{
			name: 'Test',
			removeAllVowels: 'Bread'
		}, {
			name: 'Test 2',
			removeAllVowels: 'Apples'
		}, {
			name: 'Test 3',
			removeAllVowels: 'Carrots'
		}];

		var results = $filter('favoriteFood')(mockedList, 'Apples');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('ppls');
	});



}

angular
	.module('app')
	.filter('removeAllVowels', removeAllVowels);

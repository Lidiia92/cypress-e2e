describe('Searchbox Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
	});

	it('should type into search box and submit with pressing enter', () => {
		cy.get('#searchTerm').type('test text {enter}');
	});

	it('should show search results page', () => {
		cy.get('h2').contains('Search Results:');
	});
});

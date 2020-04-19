describe('Feedback Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.contains('Feedback').click();
	});

	it('should load feedback form', () => {
		cy.get('form').should('be.visible');
	});

	it('should fill feedback form', () => {
		cy.get('#name').type('Test Name Field');
		cy.get('#email').type('testemail@gmail.com');
		cy.get('#subject').type('Subject Test');
		cy.get('#comment').type('This is the comment');
	});

	it('should submit form', () => {
		cy.get('.btn-signin').click();
	});

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback');
	});
});

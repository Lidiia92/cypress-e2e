describe('Password Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
	});

	it('should click on the sign in button', () => {
		cy.get('#signin_button').click();
	});

	it('should click on the forgot password button', () => {
		cy.get('.offset > a').click();
	});

	it('should fill email field', () => {
		cy.get('#user_email').type('testemail@gmail.com');
	});

	it('should submit the form', () => {
		cy.contains('Send Password').click();
	});
});

describe('Testing Navigation', () => {
	it('Visits Quests', () => {
		cy.visit('http://localhost:3000');

		cy.contains('iPhone 9').click();

		cy.url().should('include', '/quest/1');

		cy.contains('Go Back').click();

		cy.contains('iPhone X');
	});
});

export {};

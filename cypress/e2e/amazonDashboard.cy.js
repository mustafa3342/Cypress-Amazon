describe('Amazon Searchbox', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com')
    });
    it('user searches iphone 15 promax', () => {
        cy.title().should('include', 'Amazon.com')
        cy.get('#twotabsearchtextbox').type('iphone 15 promax')
        cy.get('#nav-search-submit-button').click()
        cy.get('span').contains('1-16 of over 6,000 results for')
    });
});
describe('Home Page Test', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('display welcome page!', () => {
        cy.contains("Welcome to Next.js!").should("be.visible")
    })
})
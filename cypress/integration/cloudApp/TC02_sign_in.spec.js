/// <reference types = "cypress" />

  
describe("Log In flow", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.get('#login-dblue').click()
      })

    
    it("Should not log in user with invalid email / password combination", () => {
        cy.get('[data-testid="regular-login-email"]').type(Cypress.env('valid_username'))
        cy.get('[data-testid="regular-login-password"]').type("Test!")
        cy.get('input[type="submit"]').click()
        cy.contains('.alert-danger', "Invalid email / password combination")
    })

    it("Should log in user", () => {   
        cy.get('[data-testid="regular-login-email"]').type(Cypress.env('valid_username'))
        cy.get('[data-testid="regular-login-password"]').type(Cypress.env('valid_password'))
        cy.get('input[type="submit"]').click()
        expect(cy.get('.alert-message').contains("Welcome back!"), "User is not in Home Page")
        
    })
    

})

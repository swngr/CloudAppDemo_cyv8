/// <reference types = "cypress"/>




describe("Sign Up & Sign Out flows", () => {    

    it("Should not sign up user if any field is empty", () => {
        cy.get('#email').clear()
        cy.get('#password').clear()
        cy.get('input[type="submit"]').click()
        cy.get('.toast-body').should('not.exist')

    })

    it("Should not sign up user if email has already been taken", () => {
        cy.get('#email').type(Cypress.env('valid_username'))
        cy.get('#password').type(Cypress.env('valid_password'))
        cy.get('input[type="submit"]').click()
        cy.contains('.alert-danger','Validation failed: Email has already been taken').should('exist')

    })

    
    it("Should sign up user & then sign out", () => {       
        cy.get('#email').clear().type("asdf@0111.com")
        cy.get('#password').clear().type(Cypress.env('valid_password'))
        cy.get('input[type="submit"]').click()
        expect(cy.get('.toast-body')).to.exist

        cy.get('[data-testid="cloudapp-logo"]').click()
        expect(cy.get('#main-menu'), "Main menu not visible").to.exist

        cy.get('#main-menu').click()
        cy.get('[data-testid="dropdown-link-sign_out"]').click()
        cy.contains('.alert-success', "Successfully Logged Out").should('exist') 
        
    })


   

})
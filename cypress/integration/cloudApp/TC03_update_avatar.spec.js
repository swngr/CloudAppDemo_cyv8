/// <reference types = "cypress"/>



describe("Update avatar flow", () => {
    it("Should update name, company and role", () => {
        
        cy.visit("/")
        cy.get('#login-dblue').click()
        cy.get('[data-testid="regular-login-email"]').type(Cypress.env('valid_username'))
        cy.get('[data-testid="regular-login-password"]').type(Cypress.env('valid_password'))
        cy.get('input[type="submit"]').click()

        cy.get('#main-menu').click()
        cy.get('[data-testid="dropdown-link-settings"]').click()
        expect(cy.get('#profile div h3').contains(("Your profile")))

        //Update Name, Company, Role and Submit
        cy.get('[data-testid="settings-about-you-name-field"]').clear().type("Demo_2")
        cy.get('[data-testid="settings-about-you-company-field"]').clear().type("CloudApp")
        cy.get('[data-testid="settings-about-you-profile-field"]').select("engineering")
        cy.get('[data-testid="onboarding-submit-about-you-form"]').click()
        cy.contains('.alert-success',"Account updated successfully").should('exist')

    })

})






export class Login {

    navigate()
    {

        cy.visit('https://www.edu.goit.global/account/login')
    }

    validateloginTitle() {

        cy.get('.next-10stgr7 > .next-c1vj7d').should('be.visible')
        cy.get('.next-10stgr7 > .next-c1vj7d').should('have.text','Login')
    }

validateInputs() {

    cy.get('#user_email').should('be.visible')
    cy.get('#user_password').should('be.visible')
}

validateButton(){

    cy.get('.eckniwg2').should('be.visible')
    cy.get('.eckniwg2').should('have.text', 'Log in')
}

//validateLogIn(){

    validateLogIn(username, password) {
        // cy.get('#user_email').type(username);
        // cy.get('input[name="password"]').type(password);
        // cy.get('button[type="submit"]').click();

    cy.get('#user_email').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
}
}
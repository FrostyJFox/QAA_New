export class HomeP {

    
    validateMenu() {
 // Find the button in the upper right corner
 cy.get('#open-navigation-menu-mobile').click()

 // Open the website menu
 cy.get('#open-navigation-menu-mobile').should("be.visible")
 
    }

validateLogOut() {
// Check for the Log out button and click it
cy.get(':nth-child(11) > .next-bve2vl').contains("Log out").click()
}

validateFirstPage(){

    // Verify that you are returned to the login page
 cy.url().should("eq", "https://www.edu.goit.global/account/login")
}

}
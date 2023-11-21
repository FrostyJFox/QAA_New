describe("Test 1: Login and Logout", () => {
  it("should log in and log out", () => {
    // Open the URL
    cy.visit("https://www.edu.goit.global/account/login")

    // Use the login command
    cy.get('#user_email').type("user888@gmail.com")

    cy.get('input[name="password"]').type("1234567890")
    cy.get('button[type="submit"]').click()

    // Find the button in the upper right corner
    cy.get('#open-navigation-menu-mobile').click()

    // Open the website menu
    cy.get('#open-navigation-menu-mobile').should("be.visible")

    // Check for the Log out button and click it
    cy.get(':nth-child(11) > .next-bve2vl').contains("Log out").click()

    // Verify that you are returned to the login page
    cy.url().should("eq", "https://www.edu.goit.global/account/login")




    // Verify that you are returned to the login page
    cy.url().should("eq", "https://www.edu.goit.global/account/login")
})

})

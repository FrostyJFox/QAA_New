import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("Nasz pierszy blok testów", () => {

    it("1 Test z wizytą w siedzimie LMS", () => {
        cy.visit("https://www.edu.goit.global/account/login")
    })

    it("2 Znajdź wejście z pocztą i wpisz email", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('#user_email').type("user888@gmail.com")
    })

    it("3 Sprawdź przycisk submit", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.get('[type="submit"]').should("have.text", "Log in")
        cy.get('[type="submit"]').should("have.css", "background-color", "rgb(255, 107, 10)")
    })

    it("4 Scrollowanie po stronie", () => {
        cy.visit("https://docs.cypress.io/api/commands/scrollintoview#docusaurus_skipToContent_fallback")
        cy.get("#Examples").scrollIntoView().should("be.visible")
    })

    it("5 Admin login", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.login('user888@gmail.com', '1234567890')
    })

    it("6 Manager login", () => {
        cy.visit("https://www.edu.goit.global/account/login")
        cy.login('testowyqa@qa.team', 'QA!automation-1')
        cy.get('.eckniwg2').click()
        cy.get('#open-navigation-menu-mobile').click()
        cy.get('.next-x115od')
        cy.get(':nth-child(8) > .next-bve2vl').click()
    })

})
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


})

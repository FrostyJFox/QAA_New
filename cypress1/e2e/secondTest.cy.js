import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("Page object pattern", () => {

it.only("Login page test", () => {
//
LoginPage.navigate()
//
LoginPage.validateloginTitle()
//
LoginPage.validateInputs()
// check button login
LoginPage.validateButton()

})

})
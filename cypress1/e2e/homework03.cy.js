import { Login } from "../pages/Login";
import { HomeP } from "../pages/HomePage";

const LoginPage = new Login();
const HomePage = new HomeP();

describe("Page object pattern - homework03", () => {

it("Login page test", () => {
//
LoginPage.navigate()
//
LoginPage.validateloginTitle()
//
LoginPage.validateInputs()
// check button login
LoginPage.validateButton()
//Log In
LoginPage.validateLogIn('user888@gmail.com', '1234567890')
//Check menu
HomePage.validateMenu()
//Log Out
HomePage.validateLogOut()
//Validate First Page
HomePage.validateFirstPage()

})

})


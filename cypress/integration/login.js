import {homePage, login, carting} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the HomePage", function () {
    before(function () {
        cy.visit('http://automationpractice.com/index.php')
 
    });
    it("Homepage - I Should be able to click the sign in", function () {
        cy.get(homePage.signInButton).click() 
    })
    it("Login - I Should be able to login with valid information", function () {
        cy.get(login.emailFieldLog).type(login.emailFieldLogTxt)
        cy.get(login.passwordFieldLog). type(login.passwordFieldLogTxt)
        cy.get(login.signInBtnLog).click()

    })

 
it.skip("Login - I Should'nt be able to login with an invalid information", function () {
   cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    cy.get(login.emailFieldLog).type(login.invalidEmailFieldLogTxt)
    cy.get(login.passwordFieldLog).type(login.invalidPasswordFieldLogTxt)
    cy.get(login.signInBtnLog).click()
    cy.get(login.errorMessage).should('be.visible')

})

    it.skip("Carting - I Should be able to cart items and checkout", function () {

        cy.get(carting.women).click()
        cy.get(carting.cloth1).click()
        cy.get(carting.addBtn1).click()
        cy.get(carting.continueShopping1).click({force: true})
        cy.get(carting.women).click()
        cy.get(carting.cloth2).click()
        cy.get(carting.addBtn1).click()
        cy.get(carting.proceedToCheckoutBtn).click({force:true})
        cy.get(carting.cloth1PlusBtn).click()
        cy.get(carting.cloth2PlusBtn).click()
        cy.get(carting.proceedToCheckoutBtn2).click()
        cy.get(login.emailFieldLog).type(login.emailFieldLogTxt)
        cy.get(login.passwordFieldLog). type(login.passwordFieldLogTxt)
        cy.get(login.signInBtnLog).click()
        cy.get(carting.proceedToCheckoutBtn3).click()
        cy.get(carting.termsOfService).click()
        cy.get(carting.proceedToCheckoutBtn4).click()
        cy.get(carting.byCheque).click()
        cy.get(carting.iConfirmMyOder).click()
        cy.get(carting.backToOrderBtn).click()
        cy.get(carting.backToAccountBtn).click()
        
})
})



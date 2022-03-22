import {homePage,signIn} from "../fixtures/selectors.js";
 
describe("Given I am on the HomePage", function () {
    before(function () {
        cy.visit('http://automationpractice.com/index.php')
 
    });
 
    it("homePage - I Should be able to create a new account", function () {
      cy.get(homePage.signInButton).click(),
      cy.get(homePage.emailField).type(homePage.emailText)
      cy.get(homePage.createAccountButton).click()

    })


it("signIn - I Should be able to fill in valid details to register new account", function () { 
      cy.get(signIn.titleBox).click(),
      
      cy.get(signIn.firstNameField).type(signIn.firstNameText),
      
      cy.get(signIn.lastNameField).type(signIn.lastNameText),
       
      cy.get(signIn.clearEmailfield).clear(),
      
      cy.get(signIn.emailfield).type(signIn.emailfieldtext),
      
      cy.get(signIn.passwordField).type(signIn.passwordText),
      
      cy.get(signIn.dobDay).select(signIn.dobDayNumber),
      cy.get(signIn.dobMonth).select(signIn.dobMonthNumber),
      cy.get(signIn.dobYear).select(signIn.dobYearNumber),
      cy.get(signIn.newsLetter).click(),
      cy.get(signIn.receiveSpecialOffer).click(),

      cy.get(signIn.adFirstNameField).type(signIn.adFirstNameTxt),
      cy.get(signIn.adLastNameField).type(signIn.adLastNameTxt),
      cy.get(signIn.companyField).type(signIn.companyFieldTxt),
      cy.get(signIn.addressField1).type(signIn.addressField1Txt),
      cy.get(signIn.addressField2).type(signIn.addressField2Txt),
      cy.get(signIn.cityField).type(signIn.cityTxt),
      cy.get(signIn.stateField).select(signIn.stateFieldTxt)
      //cy.get('id_country').select('United States'),
      cy.get(signIn.zipCodefield).type(signIn.zipCodeTxt),
      cy.get(signIn.additionalInfo).type(signIn.additionalInfoText),
      cy.get(signIn.homePhoneField).type(signIn.homePhoneTxt),
      cy.get(signIn.mobilePhoneField).type(signIn.mobilePhoneText),
      cy.get(signIn.assignAddyAlias).type(signIn.assignAddyText)
      cy.get(signIn.registerButton).click()
      

    })
})
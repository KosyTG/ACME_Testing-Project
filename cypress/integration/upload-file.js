import {fileUpload } from "../../cypress/fixtures/selectors.js";

describe("I want to upload a file ", function () {

    it('simple file upload', function() {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get(fileUpload.subjectHead).select(fileUpload.subjectHeadTxt)
        cy.get(fileUpload.emailField).clear().type(fileUpload.emailTxt)
        cy.get(fileUpload.orderRefrenceField).type(fileUpload.orderRefrenceFieldTxt)
        cy.get(fileUpload.attachfile).attachFile('image.jpeg')    
   Cypress.on('uncaught:exception', (err, runnable) => {return false
   })
        cy.get(fileUpload.messageField).type(fileUpload.messageFieldTxt)
        cy.get(fileUpload.sendBtn).click()
        cy.get(fileUpload.SuccessfulMessage).should('be.visible').should('contain',"Your message has been successfully sent to our team.")









    })







})
export default class EmailPage {
  clickCreateGmailAddress() {
    cy.contains('Create your own Gmail address').click()
  } 

  fillCreateGmailAddress(value) {
    cy.get('[name="Username"]').clear().type(value)
  } 
  
  clickUseExistingEmail() {
    cy.contains('Use your existing email').parent().click()
  }

  //Errors  
  getGmailAddressError() {
    cy.get('.o6cuMc.Jj6Lae').then(function($elem) {
      return $elem.text()
    })
  }
  
  clickNext() {
    cy.contains('Next').parent().click()
  }
}
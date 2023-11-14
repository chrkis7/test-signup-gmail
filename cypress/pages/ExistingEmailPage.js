export default class ExistingEmailPage {
  fillEmailAddress(value) {
    cy.get('#identifierId').clear().type(value)
  } 

  clickGetGmailAddress() {
    cy.contains('Get a Gmail address instead').click()
  }
 
  getEmailAddressError() {
    cy.get('.o6cuMc.Jj6Lae').then(function($elem) {
      return $elem.text()
    })
  }
  
  clickNext() {
    cy.contains('Next').parent().click()
  }
}
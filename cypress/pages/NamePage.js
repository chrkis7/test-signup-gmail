export default class NamePage {
  fillFirstName(value) {
    cy.get('#firstName').clear().type(value)
  }

  fillLastName(value) {
    cy.get('#lastName').clear().type(value)
  }

  getNameError() {
    cy.get('#nameError').find('span').then(function($elem) {
      return $elem.text()
    })
  }

  clickNext() {
    cy.contains('Next').parent().click()
  }
}
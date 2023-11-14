export default class PasswordPage {
  fillPassword(value) {
    cy.get('[name="Passwd"]').clear().type(value)
  }

  fillConfirmPassword(value) {
    cy.get('[name="PasswdAgain"]').clear().type(value)
  }

  getPasswordError() {
    cy.get('div.OyEIQ.uSvLId').find('span').then(function($elem) {
      return $elem.text()
    })
  }

  clickShowPasswordCheckBox() {
    cy.get('input.VfPpkd-muHVFf-bMcfAe').check()
  }

  clickShowPasswordText() {
    cy.get('#selectionc3').click()
  }

  clickNext() {
    cy.contains('Next').parent().click()
  }
}
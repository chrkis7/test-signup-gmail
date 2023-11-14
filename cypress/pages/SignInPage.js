export default class SignInPage {
  clickCreateAccount() {
    cy.contains('Create account').parent().click()
  }

  clickPersonalUse() {
    cy.contains('For my personal use').parent.click()
  }
}
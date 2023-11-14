export default class GooglePage {
  visit() {
    cy.visit('https://www.google.com', { timeout: 10000 })
  }

  clickSignIn() {
    cy.contains('Sign in').parent().click()
  }
}
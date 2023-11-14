import GooglePage from "../../pages/GooglePage"
import SignInPage from "../../pages/SigninPage"
import NamePage from "../../pages/NamePage"
import InfoPage from "../../pages/InfoPage"
import EmailPage from "../../pages/EmailPage"
import ExistingEmailPage from "../../pages/ExistingEmailPage"

describe('Test email page with positive test cases', () => {
  let index = 0
  const firstName = 'Jane'
  const month = 'May'
  const day = 5
  const year = 2000
  const gender = 'Male'

  beforeEach(function() {
    const googlePage = new GooglePage()
    const signInPage = new SignInPage()
    const namePage = new NamePage()
    const infoPage = new InfoPage()
    const emailPage = new EmailPage()
    const existingEmailPage = new ExistingEmailPage()

    googlePage.visit()
    googlePage.clickSignIn()

    signInPage.clickCreateAccount()
    signInPage.clickPersonalUse()

    namePage.fillFirstName(firstName)
    namePage.clickNext()

    infoPage.selectMonth(month)
    infoPage.fillDay(day)
    infoPage.fillYear(year)
    infoPage.selectGender(gender)
    infoPage.clickNext()

    //Verify data retrieved from data-emails fixture file
    cy.fixture('data-emails').then((emailData) => {
      this.emailData = emailData
      
      expect(this.emailData[index].newEmail).to.equal('chrkiss777')
      expect(this.emailData[index].existingEmail).to.equal('')
    })
  })

  it('Should show no error messages on not occupied new gmail address', function () {
    emailPage.clickCreateGmailAddress()
    emailPage.fillCreateGmailAddress(this.emailData[index].newEmail)
    index++
    emailPage.clickNext()
    namePage.getGmailAddressError().should('not.exist')
  })
  
  it('Should show no error messages on existing gmail address.', function () {
    emailPage.clickUseExistingEmail()
    existingEmailPage.fillEmailAddress(this.emailData[index].existingEmail)
    index++
    existingEmailPage.clickNext()
    existingEmailPage.getEmailAddressError().should('not.exist')
  })

  it('Should show no error messages on existing external email address.', function () {
    emailPage.clickUseExistingEmail()
    existingEmailPage.fillEmailAddress(this.emailData[index].existingEmail)
    index++
    existingEmailPage.clickNext()
    existingEmailPage.getEmailAddressError().should('not.exist')
  })
})
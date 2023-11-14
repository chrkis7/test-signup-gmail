import GooglePage from "../../pages/GooglePage"
import SignInPage from "../../pages/SigninPage"
import NamePage from "../../pages/NamePage"
import InfoPage from "../../pages/InfoPage"
import EmailPage from "../../pages/EmailPage"
import PasswordPage from "../../pages/PasswordPage"

describe('Test password page with positive test cases', () => {
  let index = 0
  const firstName = 'Jane'
  const month = 'May'
  const day = 5
  const year = 2000
  const gender = 'Male'
  const newEmail = 'chrkissss78'

  beforeEach(function() {
    const googlePage = new GooglePage()
    const signInPage = new SignInPage()
    const namePage = new NamePage()
    const infoPage = new InfoPage()
    const emailPage = new EmailPage()
    const passwordPage = new PasswordPage()

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

    emailPage.clickCreateGmailAddress()
    emailPage.fillCreateGmailAddress(newEmail)
    emailPage.clickNext()
    
    //Verify data retrieved from data-passwords fixture file
    cy.fixture('data-passwords').then((passwordData) => {
      this.passwordData = passwordData
      
      expect(this.passwordData[index].password).to.equal('L0v32t3st')
      expect(this.passwordData[index].retypePassword).to.equal('L0v32t3st')
      expect(this.passwordData[index].showPassword).to.equal(false) 
    })
  })

  it('Should show no error messages on both password inputs which consist of alphanumeric characters.', function () {
    passwordPage.fillPassword(this.passwordData[index].password)
    passwordPage.fillConfirmPassword(this.passwordData[index].retypePassword)
    index++
    passwordPage.clickNext()
    passwordPage.getPasswordError().should('not.exist')
  })
  
  it('Should show no error messages on both password inputs which consist of alphanumeric and special characters.', function () {
    passwordPage.fillPassword(this.passwordData[index].password)
    passwordPage.fillConfirmPassword(this.passwordData[index].retypePassword)
    index++
    passwordPage.clickNext()
    passwordPage.getPasswordError().should('not.exist')
  })

  it('Should show no error messages on both password inputs which consist of alphanumeric and special characters while showing passwords.', function () {
    passwordPage.fillPassword(this.passwordData[index].password)
    passwordPage.fillConfirmPassword(this.passwordData[index].retypePassword)
    passwordPage.clickShowPasswordCheckBox()
    index++
    passwordPage.clickNext()
    passwordPage.getPasswordError().should('not.exist')
  }) 
})
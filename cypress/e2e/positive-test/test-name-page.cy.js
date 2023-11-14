import GooglePage from "../../pages/GooglePage"
import SignInPage from "../../pages/SigninPage"
import NamePage from "../../pages/NamePage"
  
describe('Test name page with positive test cases', () => {
  let index = 0
  
  beforeEach(function() {
    const googlePage = new GooglePage()
    const signInPage = new SignInPage()
    const namePage = new NamePage()
    
    googlePage.visit()
    googlePage.clickSignIn()
    
    signInPage.clickCreateAccount()
    signInPage.clickPersonalUse()
    
    //Verify data retrieved from data-names fixture file
    cy.fixture('data-names').then((nameData) => {
      this.nameData = nameData
      
      expect(this.nameData[index].firstName).to.equal('Jane')
      expect(this.nameData[index].lastName).to.equal('')
    })
  })  

  it('Should show no error messages on capitalized first name.', function () {
    namePage.fillFirstName(this.nameData[index].firstName)
    index++
    namePage.clickNext()
    namePage.getNameError().should('not.exist')
  })
  
  it('Should show no error messages on both capitalized first name and last name.', function () {
    namePage.fillFirstName(this.nameData[index].firstName)
    namePage.fillLastName(this.nameData[index].lastName)
    index++
    namePage.clickNext()
    namePage.getNameError().should('not.exist')
  })

  it('Should show no error messages on lowercase first name and capitalized last name.', function () {
    namePage.fillFirstName(this.nameData[index].firstName)
    namePage.fillLastName(this.nameData[index].lastName)
    index++
    namePage.clickNext()
    namePage.getNameError().should('not.exist')
  })
})
import GooglePage from "../../pages/GooglePage"
import SignInPage from "../../pages/SigninPage"
import NamePage from "../../pages/NamePage"
import InfoPage from "../../pages/InfoPage"

describe('Test info page with positive test cases', () => {
  let index = 0
  const firstName = 'Jane'

  beforeEach(function() {
    const googlePage = new GooglePage()
    const signInPage = new SignInPage()
    const namePage = new NamePage()
    const infoPage = new InfoPage()

    googlePage.visit()
    googlePage.clickSignIn()

    signInPage.clickCreateAccount()
    signInPage.clickPersonalUse()

    namePage.fillFirstName(firstName)
    namePage.clickNext()

    //Verify data retrieved from data-infos fixture file
    cy.fixture('data-infos').then((infoData) => {
      this.infoData = infoData

      expect(this.infoData[index].month).to.equal('May')
      expect(this.infoData[index].day).to.equal(5)
      expect(this.infoData[index].year).to.equal(1984)
      expect(this.infoData[index].gender).to.equal('Male')
      expect(this.infoData[index].customGender).to.equal('')
      expect(this.infoData[index].personalPronoun).to.equal('')
    })
  })  

  it('Should show no error messages on year input value as 1984.', function () {
    infoPage.selectMonth(this.infoData[index].month)
    infoPage.fillDay(this.infoData[index].day)
    infoPage.fillYear(this.infoData[index].year)
    infoPage.selectGender(this.infoData[index].gender)
    index++
    infoPage.clickNext()
    infoPage.getDateError().should('not.exist')
    infoPage.getGenderError().should('not.exist')
  })
  
  it('Should show no error messages on year input value as 2023.', function () {
    infoPage.selectMonth(this.infoData[index].month)
    infoPage.fillDay(this.infoData[index].day)
    infoPage.fillYear(this.infoData[index].year)
    infoPage.selectGender(this.infoData[index].gender)
    index++
    infoPage.clickNext()
    infoPage.getDateError().should('not.exist')
    infoPage.getGenderError().should('not.exist')
  })

  it('Should show no error messages on gender input value as Rather not say.', function () {
    infoPage.selectMonth(this.infoData[index].month)
    infoPage.fillDay(this.infoData[index].day)
    infoPage.fillYear(this.infoData[index].year)
    infoPage.selectGender(this.infoData[index].gender)
    index++
    infoPage.clickNext()
    infoPage.getDateError().should('not.exist')
    infoPage.getGenderError().should('not.exist')
  })
  
  it('Should show no error messages on custom gender.', function () {
    infoPage.selectMonth(this.infoData[index].month)
    infoPage.fillDay(this.infoData[index].day)
    infoPage.fillYear(this.infoData[index].year)
    infoPage.selectGender(this.infoData[index].gender)
    infoPage.fillCustomGender(this.infoData[index].customGender)
    infoPage.selectGenderPronoun(this.infoData[index].personalPronoun)
    index++
    infoPage.clickNext()
    infoPage.getDateError().should('not.exist')
    infoPage.getGenderError().should('not.exist')
    infoPage.getCustomGenderError().should('not.exist')
    infoPage.getGenderPronounError().should('not.exist')
  }) 
})  

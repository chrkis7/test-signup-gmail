export default class InfoPage {
  selectMonth(value) {
    cy.get('#month').select(value)
  }

  fillDay(value) {
    cy.get('#day').clear().type(value)
  }

  fillYear(value) {
    cy.get('#year').clear().type(value)
  }

  selectGender(value) {
    cy.get('#gender').select(value)
  }

  fillCustomGender(value) {
    cy.get('input.whsOnd.zHQkBf').clear().type(value)
  }

  selectGender(value) {
    cy.get('#genderpronoun').select(value)
  } 

  ///////////////////////////////////////////////////////
  //Get Errors
  ///////////////////////////////////////////////////////  
  getDateError() {
    cy.get('#dateError').first().then(function($elem) {
      return $elem.text()
    })
  }

  getGenderError() {
    cy.get('#genderError').first().then(function($elem) {
      return $elem.text()
    })
  }

  getCustomGenderError() {
    cy.get('#customGender').find('span').parent().then(function($elem) {
      return $elem.text()
    })
  }

  getGenderPronounError() {
    cy.get('#genderpronounError').first().then(function($elem) {
      return $elem.text()
    })
  }

  clickNext() {
    cy.contains('Next').parent().click()
  }
}
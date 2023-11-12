  //It is unable to navigate to the next page, 
  //by clicking `Sign in` or `Next` button using automation.
  //Google redirects to 403 Forbidden Error.
  //To test each page, accessing temporary URL is the only way.
  
  const signInPage = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=en&ifkv=AVQVeyyIPgk2bkX_W7QkxwtdXmz-epHUy5sMjOGk6e_acY2euFfnp-QdGcw2kmJu8onrnuWbYsRI&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-184366966%3A1699745148185438&theme=glif'
  const setNamePage = 'https://accounts.google.com/signup/v2/createaccount?biz=false&cc=CA&continue=https%3A%2F%2Fwww.google.com%2F&dsh=S-184366966%3A1699745148185438&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AVQVeyxCw65FkLhTitbHnmLbM9Ugyy8GuwZ4KReCw2akzRNzAdiYcjSAvH1skDb2P9YwWx1l58Fi&theme=glif'
  //const setInfoPage = 'https://accounts.google.com/signup/v2/birthdaygender?biz=false&cc=CA&continue=https%3A%2F%2Fwww.google.com%2F&dsh=S-184366966%3A1699745148185438&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AVQVeyxCw65FkLhTitbHnmLbM9Ugyy8GuwZ4KReCw2akzRNzAdiYcjSAvH1skDb2P9YwWx1l58Fi&theme=glif&TL=AIBe4_KkKv5sbxqZnzK8Lv7_S0io7M_zUIxcHcXaETvQZQBjy7o3VyC0fiEewN1o'
  //const setEmailPage = 'https://accounts.google.com/signup/v2/createusername?biz=false&cc=CA&continue=https%3A%2F%2Fwww.google.com%2F&dsh=S-184366966%3A1699745148185438&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AVQVeyxCw65FkLhTitbHnmLbM9Ugyy8GuwZ4KReCw2akzRNzAdiYcjSAvH1skDb2P9YwWx1l58Fi&theme=glif&TL=AIBe4_Kyj8viz8xMgIHrz_t3U6qoyG2-_KOdx3Dg4QP51LEXTbHU-RowN0qdD5J5'
  //const setPasswordPage ='https://accounts.google.com/signup/v2/createpassword?biz=false&cc=CA&continue=https%3A%2F%2Fwww.google.com%2F&dsh=S-184366966%3A1699745148185438&ec=GAZAmgQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=AVQVeyxCw65FkLhTitbHnmLbM9Ugyy8GuwZ4KReCw2akzRNzAdiYcjSAvH1skDb2P9YwWx1l58Fi&theme=glif&TL=AIBe4_Kyj8viz8xMgIHrz_t3U6qoyG2-_KOdx3Dg4QP51LEXTbHU-RowN0qdD5J5'

describe('Test creating a Google account', () => {
  beforeEach(function() {
    cy.fixture('test-data-names').then((nameData) => {
      this.nameData = nameData
      
      expect(this.nameData[0].firstName).to.equal('Jane')
      expect(this.nameData[0].lastName).to.equal('')
    })
    cy.fixture('test-data-infos').then((infoData) => {
      this.infoData = infoData

      expect(this.infoData[0].month).to.equal('May')
      expect(this.infoData[0].day).to.equal(5)
      expect(this.infoData[0].year).to.equal(1984)
      expect(this.infoData[0].gender).to.equal('Male')
      expect(this.infoData[0].newGender).to.equal('')
      expect(this.infoData[0].personalPronoun).to.equal('')

    })
    cy.fixture('test-data-emails').then((emailData) => {
      this.emailData = emailData
      
      expect(this.emailData[0].newEmail).to.equal('chrkiss777')
      expect(this.emailData[0].existingEmail).to.equal('')

    })
    cy.fixture('test-data-passwords').then((passwordData) => {
      this.passwordData = passwordData

      expect(this.passwordData[0].password).to.equal('L0v32t3st')
      expect(this.passwordData[0].retypePassword).to.equal('L0v32t3st')
      expect(this.passwordData[0].showPassword).to.equal(false) 
    })
  })


  it('Pulls data from fixture', function () {
    //this.nameData.forOf((names, index) => cy.log(`Test case ${index + 1}: ${names.firstName} ${names.lastName}`))

    cy.visit(signInPage)
    cy.visit(setNamePage)
  })
})

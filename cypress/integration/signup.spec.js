const data = require('../helpers/data');
const landing = require('../helpers/elements/landing');
const login = require('../helpers/elements/login');
const signup = require('../helpers/elements/signup');

describe('Signup', () => {
    beforeEach( () => {
        cy.visit('/')
        cy.get(login.SIGNUP_BUTTON).click()
    })

    it('"Signup" header is displayed', () => {
      cy.get(signup.HEADER).should('have.text', 'Signup')
    })

    it('Can successfully signup a new user using the default fields from constructor', () => {
      let user = new data.User();
      cy.get(signup.inputs.FIRST_NAME).type(user.firstName)
      cy.get(signup.inputs.LAST_NAME).type(user.lastName)
      cy.get(signup.inputs.USERNAME).type(user.username)
      cy.get(signup.inputs.PASSWORD).type(user.password)
      cy.get(signup.SUBMIT_BUTTON).click()
      cy.get(landing.toast).should('contain', 'Success')
    })
  })
  
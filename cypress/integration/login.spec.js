const data = require('../helpers/data');
const landing = require('../helpers/elements/landing');
const login = require('../helpers/elements/login');

describe('Login', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('Succesful login redirects to dashboard', function () {
    let user = new data.User();
    cy.signupUser(user)
    cy.get(login.inputs.USERNAME).type(user.username)
    cy.get(login.inputs.PASSWORD).type(user.password)
    cy.get(login.SUBMIT_BUTTON).click()
    cy.get(landing.toast).should('contain', 'Authenticated')
    cy.url().should('contain', '/dashboard')
    cy.get('[data-test=dashboard-header]').should('have.text', 'Dashboard')
  })

  it('Positive feedback is provided upon successfull authentication', function () {
    let user = new data.User();
    cy.signupUser(user)
    cy.get(login.inputs.USERNAME).type(user.username)
    cy.get(login.inputs.PASSWORD).type(user.password)
    cy.get(login.SUBMIT_BUTTON).click()
    cy.get(landing.toast).should('contain', 'Authenticated')
  })

  it('Get "Invalid username" error when trying to login with a user that has not been created yet, and user is not authenticated', function () {
    let user = new data.User();
    cy.get(login.inputs.USERNAME).type(user.username)
    cy.get(login.inputs.PASSWORD).type(user.password)
    cy.get(login.SUBMIT_BUTTON).click()
    cy.get(landing.toast).should('contain', 'Error: Invalid username')
    cy.url().should('not.contain', '/dashboard')
  })

  it('Get "Invalid password" error when trying to login with a valid username, but wrong password, and user is not authenticated', function () {
    let user = new data.User();
    cy.signupUser(user)
    cy.get(login.inputs.USERNAME).type(user.username)
    cy.get(login.inputs.PASSWORD).type('WRONG')
    cy.get(login.SUBMIT_BUTTON).click()
    cy.get(landing.toast).should('contain', 'Error: Incorrect password')
    cy.url().should('not.contain', '/dashboard')
  })
})

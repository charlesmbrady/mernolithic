// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
const data = require('../helpers/data');
const landing = require('../helpers/elements/landing');
const login = require('../helpers/elements/login');
const signup = require('../helpers/elements/signup');

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add("signupUser", (user) => {
    cy.visit('/')
    cy.get(login.SIGNUP_BUTTON).click()
    cy.get(signup.inputs.FIRST_NAME).type(user.firstName)
    cy.get(signup.inputs.LAST_NAME).type(user.lastName)
    cy.get(signup.inputs.USERNAME).type(user.username)
    cy.get(signup.inputs.PASSWORD).type(user.password)
    cy.get(signup.SUBMIT_BUTTON).click()
})

Cypress.Commands.add("loginUser", (user) => {
    cy.visit('/')
    cy.get(login.inputs.USERNAME).type(user.username)
    cy.get(login.inputs.PASSWORD).type(user.password)
    cy.get(login.SUBMIT_BUTTON).click()
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

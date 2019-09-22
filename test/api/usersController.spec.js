const request_helper = require('../helpers/request_helper')
const expect = require('chai').expect;

describe('usersController', () => {
    
    const user = {
        firstName:`${Date.now()}`,
        lastName:`${Date.now()}`,
        username:`${Date.now()}`,
        password:`${Date.now()}`
    }

    it('signup', async () => {
        response = await request_helper.signup(user)

        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.empty 
        expect(response.body.message).to.not.equal(`Error: username already exists: ${user.username}`)
        expect(response.body.username).to.equal(user.username) // main important test
    })

    it('login', async () => {
        response = await request_helper.login(user)

        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.empty 
        expect(response.body.message).to.not.equal('Error: Invalid username')
        expect(response.body.message).to.not.equal('Error: Incorrect password')
        expect(response.body.message).to.not.equal('There was an err signing jwt token')
        expect(response.body.token).to.not.be.empty //main important test is this token one
    })
})
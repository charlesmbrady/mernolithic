const request_helper = require('../helpers/request_helper')
const expect = require('chai').expect;

describe('hellosController', () => {

    // before each test, signup a user and then login to get a jwt token 
    // to authenticate requests to protected routes
    before(async () => {
        const user = {
            firstName:`${Date.now()}`,
            lastName:`${Date.now()}`,
            username:`${Date.now()}`,
            password:`${Date.now()}`
        }
        signupUser = await request_helper.signup(user)
        tokenResponse = await request_helper.login(user);
        token = "Bearer " + tokenResponse.body.token;
    })

    it('createHello', async () => {
        response = await request_helper.createHello()
        
        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.empty
    })

    it('getHellos', async () => {
        response = await request_helper.getHellos()
        
        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.empty
    })

    after(function() {
        token = "";
    })
})
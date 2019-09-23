const request_helper = require('../helpers/request_helper.js')
const expect = require('chai').expect

describe('canary test', () => {

    it('home responds with 200', async () => {
        response = await request_helper.canaryTest()
        expect(response.status).to.equal(200)
    })
})
require('custom-env').env(true)
const supertest = require('supertest')

const baseUrl = supertest(process.env.BASE_URL)

const signup = async (signupUser) => {
    return baseUrl.post('/auth/signup')
            .send(signupUser)
            .set('Accept', '*/*')
}

const login = async (loginUser) => {
    return baseUrl.post('/auth/login')
            .send(loginUser)
            .set('Accept', '*/*')
}

const createHello = async () => {
    return baseUrl.post("/api/hellos")
        .send({
            greeting: "hello greeting from test!"
        })
        .set('Accept', '*/*')
        .set('Authorization', token)
}

const getHellos = async () => {
    return baseUrl.get("/api/hellos")
        .set('Accept', '*/*')
        .set('Authorization', token)
}

module.exports = {
    signup,
    login,
    getHellos,
    createHello
}
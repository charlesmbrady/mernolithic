import axios from "axios";

export default {
    // Logs the user out
    logout: function () {
        localStorage.clear()
    },
    // Log the user in
    login: function (user) {
        return axios.post('/auth/login', user).catch(err => { throw err });
    },
    // New user registration
    signup: function (user) {
        return axios.post('/auth/signup', user);
    }
};
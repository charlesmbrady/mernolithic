import axios from "axios";

//set the default authorization header to the jwt token from local storage if there is one
if(!localStorage.getItem('connection')){
    localStorage.setItem('connection', JSON.stringify({ message: "no connection" }))
}
axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('connection')).token}`; 

export default {
    
    // Gets hellos from the protected route
    getHellos: function () {
        return axios.get('/api/hellos').catch(err => { throw err });
    }

};
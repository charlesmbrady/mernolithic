const User = function (firstName, lastName, username, password) {
    this.firstName = firstName || Date.now(),
    this.lastName = lastName || Date.now(),
    this.username = username || Date.now(),
    this.password = password || 'password'
}

module.exports = {
    User
}
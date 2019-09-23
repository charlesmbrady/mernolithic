const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

// Defining methods for the usersController
module.exports = {
    createUser: function (req, res) {     //signup

        const { username, password, firstName, lastName } = req.body;

        // ADD VALIDATION
        db.User.findOne({ 'username': username }, (err, userMatch) => {
            if (userMatch) {
                return res.json({
                    message: `Error: username already exists: ${username}`
                });
            }
            const newUser = new db.User({
                'username': username,
                'password': password,
                'firstName': firstName,
                'lastName': lastName
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                return res.json(savedUser);
            });
        });
    },
    login: function (req, res) {    //login
        const { username, password } = req.body;
        db.User.findOne({ 'username': username })
            .then((userMatch) => {
                //check username
                if (!userMatch) {
                    res.json({ message: 'Error: Invalid username' });
                }

                //check password
                if (!bcrypt.compareSync(password, userMatch.password)) {
                    res.json({ message: 'Error: Incorrect password' });
                }

                //return jwt token and usermatch with jwt set to expire in 1h
                jwt.sign({ userMatch }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    if(err){
                        res.json({ message: `Error: There was an err signing jwt token` })
                    }
                    //return only the fields I want from the user object using cleanUser
                    const connection = {
                        token: token,
                        user: {
                            username: userMatch.username
                        }
                    }
                    res.json(connection)
                })
            }).catch(err => {
                res.json(err)
            })
    },
    updateUser: function (req, res) {
        const id = req.params.id;
        const update = req.body;
        const options = {
            new: true
        }

        db.User.findByIdAndUpdate(id, update, options).then(updatedUser => {
            res.json(updatedUser)
        })
    },
    deleteUser: function (id, res) {
        db.User.findByIdAndDelete(req.params.id).then(deletedUser => {
            res.json(deletedUser)
        })
    }
}

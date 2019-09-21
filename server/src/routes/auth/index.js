const router = require("express").Router();
// const passport = require('../../passport');
const usersController = require("../../controllers/usersController");

// router.post('/login', usersController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/login', usersController.login);
router.post('/signup', usersController.createUser);

module.exports = router;

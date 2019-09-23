const db = require("../models");
const jwt = require("jsonwebtoken");

// Defining methods for the hellosController
module.exports = {
  createHello: function (req, res) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        //Forbidden
        res.sendStatus(403);
      }

      db.Hello.create(req.body)
        .then((hello) => {
          res.json(hello)
        })
    })

  },
  getAllHellos: function (req, res) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        //Forbidden
        res.sendStatus(403);
      }

      db.Hello.find({})
        .then((hellos) => {
          res.json(hellos)
        })
    })
  },
  getHelloById: function (req, res) {
    db.Hello.findById(req.params.id)
      .then((hello) => {
        res.json(hello)
      })
  },
  updateHello: function (req, res) {
    const id = req.params.id;
    const update = req.body;
    const options = {
      new: true
    }

    db.Hello.findByIdAndUpdate(id, update, options).then(updatedHello => {
      res.json(updatedHello)
    })
  },
  deleteHello: function (id, res) {
    db.Hello.findByIdAndDelete(req.params.id).then(deletedHello => {
      res.json(deletedHello)
    })
  }
}

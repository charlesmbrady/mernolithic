const router = require("express").Router();
const hellosController = require("../../controllers/hellosController");

// Matches with "/api/hellos"
router.route("/")
  .post(verifyToken, hellosController.createHello)
  .get(verifyToken, hellosController.getAllHellos)

router.route("/:id")
  .get(verifyToken, hellosController.getHelloById)
  .put(verifyToken, hellosController.updateHello)
  .delete(verifyToken, hellosController.deleteHello)

//put this middleware function before routes you want protected , also copy and paste to bottom of any set of routes you want protected
function verifyToken(req, res, next) {
  //get Auth header value
  const bearerHeader = req.headers['authorization'];

  //check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    //split at the space in "Bearer <token>"
    const bearer = bearerHeader.split(' ');
    //get token from first spot in array
    const bearerToken = bearer[1];
    //set token in req. and continue
    req.token = bearerToken;
    //next middleware
    next();
    
  } else {
    //Forbidden
    res.sendStatus(403)
  }
}

module.exports = router;
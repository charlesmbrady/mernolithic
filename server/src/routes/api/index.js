const router = require("express").Router();
const hellosRoutes = require("./hellos");

router.use("/hellos", hellosRoutes);

module.exports = router;

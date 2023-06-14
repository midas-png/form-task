const Router = require("express");
const router = new Router();
const numbersRouter = require("./numbers");

router.use("/number", numbersRouter);

module.exports = router;

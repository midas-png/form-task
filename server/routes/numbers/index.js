const Router = require("express");
const router = new Router();
const NumbersController = require("../../controllers/numbers");
const { numbersGetValidation } = require("./validation");

router.get("/numbers", numbersGetValidation, NumbersController.getAll);

module.exports = router;

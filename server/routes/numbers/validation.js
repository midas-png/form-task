const { query } = require("express-validator");

const numbersGetValidation = [
    query("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is not valid"),
    query("number")
        .notEmpty()
        .withMessage("Number is required")
        .isString()
        .withMessage("Number parameter must be a string")
        .isLength({ min: 6, max: 6 })
        .withMessage("Number must be 6 characters long"),
];

module.exports = { numbersGetValidation };

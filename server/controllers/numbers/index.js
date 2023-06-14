const ApiError = require("../../errorApi");
const data = require("../../data");
const { validationResult } = require("express-validator");

class NumbersController {
    async getAll(req, res, next) {
        try {
            const { email, number } = req.query;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return next(ApiError.badRequest(errors.array()));
            }

            const result = data.filter(
                (value) => value.email === email || value.number === number
            );

            return res.json(result);
        } catch (e) {
            return next(ApiError.internal(e));
        }
    }
}

module.exports = new NumbersController();

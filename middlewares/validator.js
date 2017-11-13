const Joi = require("joi");

const validator = schema => (
  (req, res, next) => {
    const errors = [];
    Object.keys(schema).forEach((type) => {
      const validated = Joi.validate(req[type], schema[type], { abortEarly: false });
      if (validated.error) {
        validated.error.details.forEach((error) => {
          errors.push({
            status: 400,
            title: "Bad Parameter",
            details: error.message
          });
        });
      }
    });
    if (errors.length) {
      return res.status(400).send({ errors });
    }
    return next();
  }
);

module.exports = validator;

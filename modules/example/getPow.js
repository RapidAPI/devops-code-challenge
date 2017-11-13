/**
 * @function getPow
 * @memberOf Example
 * @description Just an example that pows a number
 * <p><i>GET /hello</i></p>
 * @param { num } - Number to multiply
 * @returns res num * num
 * <p></p>
 */

const Joi = require("joi");

module.exports = function (req, res) {
  const { num } = req.params;
  res.status(200).send((num * num).toString());
};

module.exports.validations = {
  params: {
    num: Joi.number().max(10).required()
  },
  query: {
    float: Joi.boolean()
  }
};

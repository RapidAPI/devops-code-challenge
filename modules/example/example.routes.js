const getPow   = require("./getPow");
const getPowValidations = require("./getPow").validations;
const getHello = require("./getHello");
const getData = require("./getData");
const getDataFields = require("./getData").validations;
const updateData = require("./updateData");
const endpoint = require("../../middlewares/endpoint");

const validator = require("../../middlewares/validator");

module.exports = function (app) {
  app.get("/pow/:num", validator(getPowValidations), getPow);
  app.get("/hello", getHello);
  app.get("/getData/:id", validator(getDataFields), endpoint(getData));
  app.put("/updateData/:id", endpoint(updateData));
};

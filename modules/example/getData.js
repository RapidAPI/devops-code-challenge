const NotFound = require("../../utils/exceptions/NotFound");
const BadGateway = require("../../utils/exceptions/BadGateway");
const Joi = require("joi");

async function Database(data) {
  if (data > 1 && data < 10) throw new BadGateway("Database Error");
  else if (data > 10 && data < 20) return { username: "Spyes" };
  return null;
}


module.exports = async (req) => {
  try {
    const entity = await Database(req.params.id);
    if (!entity) throw new NotFound(`Entity with id ${req.params.id} not found.`);
    return { status: 200, data: entity };
  } catch (ex) {
    throw ex;
  }
};

module.exports.validations = {
  params: {
    id: Joi.number().required()
  }
};

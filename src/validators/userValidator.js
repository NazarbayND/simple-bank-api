const Joi = require("joi");

const validateBalanceUpdate = (req, res, next) => {
  const schema = Joi.object({
    userId: Joi.number().integer().min(1).required(),
    amount: Joi.number().integer().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ errors: error.details });
  }
  next();
};

module.exports = {
  validateBalanceUpdate,
};

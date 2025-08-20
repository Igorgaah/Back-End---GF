const { body, validationResult } = require('express-validator');

const createRules = [
  body('name')
    .exists({ checkFalsy: true }).withMessage('name é obrigatório')
    .isString().withMessage('name deve ser texto')
    .trim()
    .notEmpty().withMessage('name não pode ser vazio'),
  body('type')
    .exists({ checkFalsy: true }).withMessage('type é obrigatório')
    .isString().withMessage('type deve ser texto')
    .trim()
    .notEmpty().withMessage('type não pode ser vazio'),
  body('amount')
    .exists({ checkFalsy: true }).withMessage('amount é obrigatório')
    .isFloat({ gt: 0 }).withMessage('amount deve ser > 0'),
  body('investment_date')
    .exists({ checkFalsy: true }).withMessage('investment_date é obrigatório')
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('investment_date deve ser YYYY-MM-DD'),
];

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
module.exports = { createRules, validate };
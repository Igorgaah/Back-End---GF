const { body } = require('express-validator');


const createRules = [
body('name').isString().trim().notEmpty().withMessage('name é obrigatório'),
body('type').isString().trim().notEmpty().withMessage('type é obrigatório'),
body('amount').isFloat({ gt: 0 }).withMessage('amount deve ser > 0'),
body('date').matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('date deve ser YYYY-MM-DD'),
];


module.exports = { createRules };
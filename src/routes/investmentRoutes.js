const express = require('express');
const controller = require('../controllers/investmentController');


const router = express.Router();


router.get('/investments', controller.list);
router.post('/investments', controller.create);
router.put('/investments/:id', controller.update);
router.delete('/investments/:id', controller.remove);


// Middleware de erro
router.use((err, req, res, next) => {
console.error(err);
const status = err.status || 500;
res.status(status).json({ message: err.message || 'Erro interno' });
});


module.exports = router;
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <-- IMPORTANTE

const investmentController = require('./controllers/investmentController');
const { createRules, validate } = require('./middlewares/validation');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(express.json());
app.use(cors()); // <-- HABILITA CORS PARA TODAS AS ROTAS E ORIGENS

// Endpoint do gráfico (deve vir antes de /investments/:id)
app.get('/investments/types/distribution', investmentController.distribution);

// Rotas principais
app.get('/investments', investmentController.list);
app.get('/investments/:id', investmentController.getById); // Busca por ID
app.post('/investments', createRules, validate, investmentController.create);
app.put('/investments/:id', createRules, validate, investmentController.update);
app.delete('/investments/:id', investmentController.remove);

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware de erro global
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Erro interno' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

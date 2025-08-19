const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');


const investmentRoutes = require('./routes/investmentRoutes');
const { initDb } = require('./db');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


// Swagger
const swaggerDocument = YAML.load(path.join(__dirname, '..', 'swagger.yaml'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// API
app.use('/api', investmentRoutes);


// Health check
app.get('/health', (_, res) => res.json({ ok: true }));


initDb().then(() => {
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
}).catch((err) => {
console.error('Failed to init DB', err);
process.exit(1);
});
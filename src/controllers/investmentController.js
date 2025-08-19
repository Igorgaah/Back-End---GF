const service = require('../services/investmentService');


async function list(req, res) {
const rows = await service.list();
res.json(rows);
}


async function create(req, res, next) {
try {
const created = await service.create(req.body);
res.status(201).json(created);
} catch (err) { next(err); }
}


async function update(req, res, next) {
try {
const { id } = req.params;
const updated = await service.update(Number(id), req.body);
res.json(updated);
} catch (err) { next(err); }
}


async function remove(req, res, next) {
try {
const { id } = req.params;
await service.remove(Number(id));
res.status(204).send();
} catch (err) { next(err); }
}


module.exports = { list, create, update, remove };
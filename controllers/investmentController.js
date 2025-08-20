const service = require('../services/investmentService');

async function list(req, res, next) {
  try {
    const rows = await service.list();
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const investment = await service.getById(id);
    if (!investment) {
      return res.status(404).json({ error: 'Investimento não encontrado' });
    }
    res.json(investment);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const updated = await service.update(id, req.body); // ID como string (UUID)
    if (!updated) {
      return res.status(404).json({ error: 'Investimento não encontrado' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await service.remove(id); // ID como string (UUID)
    if (!deleted) {
      return res.status(404).json({ error: 'Investimento não encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function distribution(req, res, next) {
  try {
    const dist = await service.typeDistribution();
    res.json(dist);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, getById, create, update, remove, distribution };

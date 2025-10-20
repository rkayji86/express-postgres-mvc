const service = require('../services/category.service');

exports.list = async (req, res, next) => {
  try {
    const result = await service.list(req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await service.getById(Number(req.params.id));
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await service.update(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await service.remove(Number(req.params.id));
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(202).json({
      data: "Category deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};

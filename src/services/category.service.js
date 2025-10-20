const repo = require('../repositories/category.repository');
const paginate = require('../utils/pagination');

exports.list = async (query) => {
  const { page = 1, limit = 10 } = query;
  const offset = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    repo.findAll({ limit: Number(limit), offset }),
    repo.count(),
  ]);
  return paginate(items, Number(page), Number(limit), Number(total));
};

exports.getById = async (id) => repo.findById(id);

exports.create = async (data) => {
  const [newRec] = await repo.create(data);
  return newRec;
};

exports.update = async (id, data) => {
  const affected = await repo.update(id, data);
  if (!affected) return null;
  return repo.findById(id);
};

exports.remove = async (id) => {
  const affected = await repo.remove(id);
  return affected > 0;
};

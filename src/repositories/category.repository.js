const db = require('../../db/db');

const TABLE = 'categories';

exports.findAll = ({ limit = 10, offset = 0 } = {}) =>
  db(TABLE).select('*').limit(limit).offset(offset).orderBy('id', 'asc');

exports.count = () =>
  db(TABLE).count({ count: '*' }).first().then((r) => Number(r.count));

exports.findById = (id) => db(TABLE).where({ id }).first();

exports.create = (data) => db(TABLE).insert(data).returning('*');

exports.update = (id, data) => db(TABLE).where({ id }).update({ ...data, updated_at: new Date().toISOString() });

exports.remove = (id) => db(TABLE).where({ id }).del();

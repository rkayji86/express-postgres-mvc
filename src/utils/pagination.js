module.exports = (items, page = 1, limit = 10, total = null) => {
  const totalItems = total === null ? items.length : total;
  return {
    page: Number(page),
    limit: Number(limit),
    total: Number(totalItems),
    data: items,
  };
};

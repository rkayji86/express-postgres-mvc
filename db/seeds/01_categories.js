exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();

  // Insert sample categories
  await knex('categories').insert([
    { name: 'Technology' },
    { name: 'Business' },
    { name: 'Lifestyle' },
  ]);
};

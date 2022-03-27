/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('product_category').truncate()
  await knex('product_category').insert([
    {
      product_id: 1,
      category_id: 2
    },
    {
      product_id: 2,
      category_id: 2
    },
    {
      product_id: 3,
      category_id: 2
    },
    {
      product_id: 4,
      category_id: 1
    },

  ]);
};

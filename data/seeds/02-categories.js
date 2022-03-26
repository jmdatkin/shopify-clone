/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').truncate()
  await knex('table_name').insert([
    {
      id: 1,
      name: "Apparel"
    }
  ]);
};

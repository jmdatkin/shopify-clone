/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').truncate()
  await knex('categories').insert([
    {
      id: 1,
      name: "Apparel"
    },
    {
      id: 2,
      name: "Music"
    },
  ]);
};

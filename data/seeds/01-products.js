/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
    {
      id: 1,
      name: "Mens Hoodie",
      desc: "",
      price: 12.23
    },
    {
      id: 2,
      name: "Mens Hat",
      desc: "",
      price: 12.23
    },
    {
      id: 3,
      name: "Hoagie Sandwich",
      desc: "",
      price: 12.23
    },
  ]);
};

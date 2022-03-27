/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').truncate()
  await knex('products').insert([
    // {
    //   id: 1,
    //   name: "Mens Hoodie",
    //   desc: "",
    //   price: 12.23
    // },
    // {
    //   id: 2,
    //   name: "Mens Hat",
    //   desc: "",
    //   price: 12.23
    // },
    // {
    //   id: 3,
    //   name: "Hoagie Sandwich",
    //   desc: "",
    //   price: 12.23,
    //   img: 'hoagie.jpg'
    // },
    {
      name: "Jungle Beat Digital Download",
      desc: "",
      price: 14.99,
      img: "records/city_of_trees.jpg"
    },
    {
      name: "Cabana House Digital Download",
      desc: "",
      price: 14.99,
      img: "records/cabana_house.jpg"
    },
    {
      name: "Spacious Vibes Digital Download",
      desc: "",
      price: 14.99,
      img: "records/nebula.jpg"
    },
    {
      name: "White Sweatshirt",
      desc: "A plain white sweatshirt.",
      price: 24.99,
      img: "apparel/sweater.jpg"
    }
  ]);
};

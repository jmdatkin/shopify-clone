/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('product_category', table => {
        table.increments();
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('products.id').onDelete('cascade');
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories.id').onDelete('cascade');        
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product_category');
};

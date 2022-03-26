/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('product_category', table => {
        table.increments();
        table.integer('product_id').unsigned();
        table.foreign('user_id').references('products');
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories');        
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('product_category');
};

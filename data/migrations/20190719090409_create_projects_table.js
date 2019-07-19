
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable()
            tbl.string('description', 128).notNullable()
            tbl.boolean('completed').notNullable()
            tbl
                .integer('action_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('actions')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects');
};

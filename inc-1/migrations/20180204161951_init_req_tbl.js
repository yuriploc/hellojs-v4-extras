exports.up = knex =>
  knex.schema.createTableIfNotExists('requisitions', tbl => {
    tbl.increments()
    tbl.string('catimgid').notNullable()
    tbl
      .timestamp('lastaccess')
      .notNullable()
      .defaultTo(knex.fn.now())
    tbl
      .integer('qtyaccess')
      .notNullable()
      .defaultTo(1)
  })

exports.down = knex => knex.dropTableIfExists('requisitions')

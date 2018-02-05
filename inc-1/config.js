const knxfile = require('./knexfile')
const knex = require('knex')(knxfile.development)

exports.knex = knex

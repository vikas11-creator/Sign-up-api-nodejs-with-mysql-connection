const knex = require('knex');
const config = require('../db/knexlocal')
const db = knex(config.development)
 module.exports = db;
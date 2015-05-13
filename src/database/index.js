module.exports = require('knex')({
  client: 'pg',
  connection: { host:     'localhost'
              , user:     'ehackb'
              , password: 'ehackb'
              , database: 'ehackb'
              , charset:  'utf8'
              }
});

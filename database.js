/*
 * Dit moet ik eventueel nog in een aparte map zetten
 */
 


var knex = require('knex')({
	client='mysql',
	connection: {
		host: 'localhost',
		user: 'ehackb_test',
		password: '12345',
		database: 'ehackb'
	}
});

var bookshelf = require('bookshelf')(knex);

var Price = bookshelf.Model.extend({
	tableName: 'price'
});

var Achievement = bookshelf.Model.extend({
	tableName: 'achievement'
});

var Refreshment = bookshelf.Model.extend({
	tableName: 'refreshment'
});

var Stage = bookshelf.Model.extend({
	tableName: 'stage'
});

var Track = bookshelf.Model.extend({
	tableName: 'track'
});

var Inventory = bookshelf.Model.extend({
	tableName: 'inventory'
});

var Attendee = bookshelf.Model.extend({
	tableName: 'attendee'
});

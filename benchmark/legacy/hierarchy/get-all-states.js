'use strict';

module.exports = {
	'request' : {
		'path' : '/api/v1/legacy/states',
		'body' : '',
		'method' : 'GET'
	},

	'customeHeaders' : {},

	'options' : {
		'duration' : '10s',
		'threads' : 3,
		'connections' : 10
	},
	'threshold' : {
		'reqRate' : {
			'min' : 1
		}
	}
}
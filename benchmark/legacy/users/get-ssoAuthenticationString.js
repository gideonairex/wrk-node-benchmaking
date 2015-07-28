'use strict';

module.exports = {
	'request' : {
		'path' : '/api/v1/legacy/sso/authenticate/url',
		'body' : '',
		'method' : 'GET'
	},

	'customeHeaders' : {},

	'options' : {
		'duration' : '5s',
		'threads' : 5,
		'connections' : 5
	},
	'threshold' : {
		'reqRate' : {
			'min' : 50
		}
	}
}
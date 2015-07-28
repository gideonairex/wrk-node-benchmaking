'use strict';
var request = require( 'request' );
var parser  = require( 'querystring' )

module.exports = {
	'headers' : {
		'contentType'   : '',
		'engineId'      : '',
		'engineSecret'  : '',
		'authorization' : ''
	},

	'getAuth' : function ( callback ) {
		var self = this;
		var options = {
			'url' : 'http://localhost:4000/api/v1/legacy/authenticate',
			'headers' : {
				'Content-Type'     : "application/json; charset=utf-8",
				'X-Engine-Id'      : "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
				'X-Engine-Secret'  : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
			},
			'form' : {
				'loginName' : 'XXXXX',
				'password'  : 'XXXXX'
			},
			'json' : true
		};

		request.post( options, function ( error, response, body ) {
			if( error ) {
				throw 'error'
			}
			self.headers.contentType = options.headers['Content-Type']
			self.headers.engineId = options.headers['X-Engine-Id']
			self.headers.engineSecret = options.headers['X-Engine-Secret']
			self.headers.authorization = 'BEARER ' + body.payload.sessionToken;
			callback();
		} )
	}
}
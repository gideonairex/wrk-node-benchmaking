'use strict';

module.exports = function ( config ) {

	var benchmarker = require( './benchmarker' )( config );

	return {
		'exec' : benchmarker.exec
	};

};

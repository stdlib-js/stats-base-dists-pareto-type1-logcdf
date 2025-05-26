/** @license Apache-2.0 */

'use strict';

/**
* Natural logarithm of the cumulative distribution function (CDF) for a Pareto (Type I) distribution.
*
* @module @stdlib/stats-base-dists-pareto-type1-logcdf
*
* @example
* var logcdf = require( '@stdlib/stats-base-dists-pareto-type1-logcdf' );
*
* var y = logcdf( 2.0, 1.0, 1.0 );
* // returns ~-0.693
*
* y = logcdf( 5.0, 2.0, 4.0 );
* // returns ~-1.022
*
* y = logcdf( 4.0, 2.0, 2.0 );
* // returns ~-0.288
*
* y = logcdf( 1.9, 2.0, 2.0 );
* // returns -Infinity
*
* y = logcdf( +Infinity, 4.0, 2.0 );
* // returns 0.0
*
* var mylogcdf = logcdf.factory( 10.0, 2.0 );
* y = mylogcdf( 3.0 );
* // returns ~-0.017
*
* y = mylogcdf( 2.5 );
* // returns ~-0.113
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

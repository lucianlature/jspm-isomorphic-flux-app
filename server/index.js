/**
 * Created by codelinks on 22/05/15.
 */

'use strict';

// Delete the `BROWSER` env variable if it's present
// https://github.com/iam4x/isomorphic-flux-boilerplate/issues/16
delete process.env.BROWSER;

// Install `babel` hook for ES6
// require('babel/register');

// Tell `require` calls to look into `/app` also
// it will avoid `../../../../../` require strings
// process.env.NODE_PATH = 'app';
// require('module').Module._initPaths();


/*
// Load Intl polyfill
// require('utils/intl-polyfill')(require('./config/init').locales);
*/

// Start the server
require('./koa');

/**
 * Created by codelinks on 22/05/15.
 */
'use strict';

import debug from 'debug';
import path from 'path';
import objectAssign from 'react/lib/Object.assign';
import configDevelopment from './development';

const env = process.env.NODE_ENV || 'development';
let config;

if (env === 'development') {
    config = configDevelopment;
}

export default config;
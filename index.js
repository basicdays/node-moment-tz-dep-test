#!/usr/bin/env node
'use strict';
const assert = require('assert');
const moment = require('moment-timezone');
const nestedDep = require('moment-tz-nested-dep');

const data = {
	momentVersion: moment.version,
	momentTimezoneVersion: moment.tz.version,
	nestedDep,
};
assert(data.momentVersion.startsWith('2.'));
assert(data.momentTimezoneVersion.startsWith('0.5.'));
assert(data.nestedDep.momentVersion.startsWith('2.'));
assert.equal(data.nestedDep.momentTimezoneVersion, '0.5.10');
console.dir(data, {colors: true});

const assert = require('assert');
const data = require('../index');


describe('moment-timezone versioning', function() {
	it(`should use the project's own timezone version, not an older dependency's version`, function() {
		console.dir(data);
		assert(data.nestedDep.momentVersion.startsWith('2.'));
		assert(data.nestedDep.momentTimezoneVersion.startsWith('0.4.'));
		assert(data.momentVersion.startsWith('2.'));
		assert(data.momentTimezoneVersion.startsWith('0.5.'));
		//assert.equal(data.moment, data.nestedDep.moment);
		//assert.equal(data.moment.tz, data.nestedDep.moment.tz);
	})
});

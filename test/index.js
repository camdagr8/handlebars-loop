var should = require('chai').should(),
    loop = require('../index.js');

describe('#loop(0, 6, 1)', function() {
  it('Final number equals 5', function() {
	loop(0, 6, 1).should.equal('012345');
  });
});

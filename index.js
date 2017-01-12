/**
 * Handlebars loop helper
 * @param from {Number} The start index.
 * @param to {Number} The end index.
 * @param inc {Number} How much to increment per iteration.
 */

module.exports = function(from, to, inc, block) {
	block = block || {fn: function () { return arguments[0]; }};

	var output = '';
	for (var i = from; i <= to; i += inc) { output += block.fn(i); }
	return output;
};

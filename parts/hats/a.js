var scribble = require('scribbletune');

module.exports = function( random , details ){
  return scribble.clip({
  	notes: ['a#4'],
  	pattern: 'x'.repeat(16),
  	sizzle: true
  });
}

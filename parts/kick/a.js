var scribble = require('scribbletune');

module.exports = function( random , details ){
  return scribble.clip({
  	notes: ['c2'],
  	pattern: 'x---'.repeat(4)
  });
}

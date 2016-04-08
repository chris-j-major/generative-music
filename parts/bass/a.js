var scribble = require('scribbletune');

module.exports = function( random , details ){
  return scribble.clip({
  	notes: scribble.scale('a', 'minor', 2).slice(0, 3),
  	pattern: '--x-'.repeat(4),
  	shuffle: true
  });
}

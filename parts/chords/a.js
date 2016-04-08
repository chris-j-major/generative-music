var scribble = require('scribbletune');

module.exports = function( random , details ){
  return scribble.clip({
  	notes: [
  		scribble.chord('f#', 'minor', 3),
  		scribble.chord('c#', 'minor', 3),
  		scribble.chord('d', 'major', 3),
  		scribble.chord('f#', 'minor', 3),
  		scribble.chord('c#', 'minor', 3),
  		scribble.chord('b', 'minor', 3),
  		scribble.chord('f#', 'minor', 3),
  		scribble.chord('c#', 'minor', 3),
  		scribble.chord('e', 'major', 3),
  		scribble.chord('f#', 'minor', 3),
  		scribble.chord('c#', 'minor', 3),
  		scribble.chord('d', 'major', 3)
  	],
  	pattern: 'x_x_x_--'.repeat(8),
  	sizzle: true
  });
}

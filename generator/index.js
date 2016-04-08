var jsmidgen = require("jsmidgen")

function Generator( model , opts ){
  var details = {};
  details.model = model;
  var base = model.choose( opts.random , "base" ); // starting points
  this.tracks = base( opts.random , details ); // do the creation from this point
}

Generator.prototype.toString = function(){
  return this.tracks.map(function(t){ return t.toString() }).join(" ");
}
Generator.prototype.toMidi = function(){
  var file = new jsmidgen.File();
//  this.tracks = [ this.tracks[0] ];
  this.tracks.map(function(t){
  	var track = new jsmidgen.Track();
  	file.addTrack(track);
  	t.map(function(noteObj) {
  		var level = noteObj.level || 127;
  		// While writing chords (multiple notes per tick)
  		// only the first noteOn (or noteOff) needs the complete arity of the function call
  		// subsequent calls need only the first 2 args (channel and note)
  		if (noteObj.note) {
  			noteObj.note.forEach((n, idx) => {
  				if (idx === 0) {
  					track.noteOn(0, n, null, level); // channel, pitch(note), length, velocity
  				} else {
  					track.noteOn(0, n); // channel, pitch(note)
  				}
  			});
  			noteObj.note.forEach((n, idx) => {
  				if (idx === 0) {
  					track.noteOff(0, n, noteObj.length, level)
  				} else {
  					track.noteOff(0, n)
  				}
  			});
  		} else {
  			track.noteOff(0, '', noteObj.length);
  		}
  	});
  });
  return file.toBytes();
}

module.exports = Generator;

/**
 returns an array of tracks to combine later
**/
module.exports = function( random , details ){
  return [
    details.model.choose(random,"chords")( random , details ),
    details.model.choose(random,"bass")( random , details ),
    details.model.choose(random,"kick")( random , details ),
    details.model.choose(random,"hats")( random , details )
  ];
}

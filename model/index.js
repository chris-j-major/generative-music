function Model(){
  this.keys = [];
  this.details = {};
}

Model.prototype.choose = function(random,key){
  var options = this.details[key];
  return random.choose( options );
}

Model.prototype.add = function( key , option ){
  if ( !this.details[key] ){
    this.keys.push(key);
    this.details[key] = [];
  }
  this.details[key].push( option );
}

module.exports = Model;

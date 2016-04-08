var core = require("generative-core");

var Model = require("./model");
var Generator = require("./generator");

function Music(){
  this.model = new Model();
}
Music.prototype.loadJSONModel = function( src ){
  this.model.loadJSON(src);
  return this;
}
Music.prototype.extendModel = function( key , f ){
  this.model.extend(key,f);
  return this;
}
Music.prototype.loadDefault = function(){
  require("./parts").prepare( this.model );
}
Music.prototype.generate = function( opts ){
  if ( ! opts ) opts = {};
  if ( !opts.reporter ) opts.reporter = core.Reporter.console;
  if ( !opts.random ) opts.random = new core.Seeded(0);
  return new Generator( this.model , opts );
}

module.exports = Music;

fs = require('fs');

module.exports = {
  prepare:function(model){
    var paths = fs.readdirSync( __dirname );
    for ( var i=0; i<paths.length ;i++){
      var path = __dirname+"/"+paths[i];
      var key = paths[i];
      var stats = fs.statSync(path);
      if ( stats.isDirectory() ){
        var p2 = fs.readdirSync( path );
        for ( var j=0; j<p2.length ;j++ ){
          var part = require( path +"/"+p2[j].replace(".js","") );
          model.add( key , part );
        }
      }
    }
  }
};

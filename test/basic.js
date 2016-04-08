const assert = require('assert');
const core = require("generative-core");
const Music = require("../");


describe("Music(basic)", function() {

  var m = new Music();

  describe('generate()', function() {
    var gen = m.generate();
    it("Generates string",function(done){
      assert.ok( gen.toString().length > 0 );
      done();
    });
    it("Generates midi",function(done){
      assert.ok( gen.toMidi().length > 0 );
      done();
    });
  });
});

const assert = require('assert');
const temp = require('temp');
const core = require("generative-core");
const Music = require("../");


describe("Music(basic)", function() {

  var m = new Music();
  m.loadDefault();

  describe('generate()', function() {
    var gen = m.generate();
    it("Generates string",function(done){
      assert.ok( gen.toString().length > 0 );
      done();
    });
    it("Generates midi",function(done){
      bytes = gen.toMidi();
      assert.ok( bytes.length > 0 );
      fs.writeFileSync('test.mid', bytes, 'binary');
    });
  });
});

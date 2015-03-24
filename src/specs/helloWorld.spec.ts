import chai = require('chai');
var expect = chai.expect;
import hubot_script = require('../scripts/HelloWorld');
import rob = require('./fakes/FakeRobot');
import res = require('./fakes/FakeResponse');
describe("The Hello World Hubot script", () => {
  beforeEach(() => {
    this.robot = new rob.FakeRobot();        
  });
  it("should respond to 'hello' with 'Howdy!'", () => {    
    var resp = new res.FakeResponse();
    this.robot.setup(/hello/i, resp);
    hubot_script.HelloWorld(this.robot);
    expect(resp.messageSent).to.equal("Howdy!");        
  });
});

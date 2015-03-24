import HelloWorld = require('../scripts/HelloWorld');
import rob = require('./fakes/FakeRobot');
import res = require('./fakes/FakeResponse');
import chai = require('chai');
var expect = chai.expect;

describe("The Hello World Hubot script", () => {
  
  beforeEach(() => {
    this.robot = new rob.FakeRobot();        
  });

  it("should respond to 'hello' with 'Howdy!'", () => {    
    var resp = new res.FakeResponse();
    this.robot.overhears(/hello/i, resp);
    HelloWorld(this.robot);
    expect(resp.messageReplied).to.equal("Howdy!");        
  });

  it("should hear 'howdy' and respond with 'Hola!'", () => {    
    var resp = new res.FakeResponse();
    this.robot.overhears(/howdy/i, resp);
    HelloWorld(this.robot);
    expect(resp.messageSent).to.equal("Hola!");        
  });

});

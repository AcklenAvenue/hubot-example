import HelloWorld = require('../scripts/HelloWorld');
import rob = require('./fakes/FakeRobot');
var FakeRobot = rob.FakeRobot;
import res = require('./fakes/FakeResponse');
var FakeResponse = res.FakeResponse;
import chai = require('chai');
var expect = chai.expect;

describe("The Hello World Hubot script", () => {
  
  beforeEach(() => {
    this.robot = new FakeRobot();        
  });

  it("should respond to 'hello' with 'Howdy!'", () => {    
    var resp = new FakeResponse();
    this.robot.overhears("hello", resp);
    HelloWorld(this.robot);
    expect(resp.messageReplied).to.equal("Howdy!");        
  });

  it("should hear 'howdy' and respond with 'Hola!'", () => {    
    var resp = new FakeResponse();
    this.robot.overhears("howdy", resp);
    HelloWorld(this.robot);
    expect(resp.messageSent).to.equal("Hola!");        
  });

});

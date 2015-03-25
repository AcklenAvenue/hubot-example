/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/chai-as-promised/chai-as-promised.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>
/// <reference path="./fakes/fakeResponse.ts"/>
/// <reference path="../../typings/mocha/mocha.d.ts" />

import chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

import ChuckNorris = require('../scripts/ChuckNorris');
import rob = require('./fakes/FakeRobot');
var FakeRobot = rob.FakeRobot;
import res = require('./fakes/FakeResponse');
var FakeResponse = res.FakeResponse;

describe("The Chuck Norris Hubot Script (integration)", () => {
  
  beforeEach(() => {
    this.robot = new FakeRobot();        
  });

  it("should respond to name with personalized joke", (done: MochaDone) => {    
    var response = new FakeResponse();
    this.robot.overhears("chuck norris Byron", response);
    ChuckNorris(this.robot);

    expect(response.waitForMessageToBeSent())
      .to.eventually.contain("Byron").notify(done);

  });

  it("should respond with normal Chuck Norris joke", (done: MochaDone) => {    
    var response = new FakeResponse();
    this.robot.overhears("chuck norris", response);
    ChuckNorris(this.robot);
    
    expect(response.waitForMessageToBeSent())
      .to.eventually.contain("Norris").notify(done);
    
  });

  it("should not respond at all if not called specifically", (done: MochaDone) => {    
    var response = new FakeResponse();
    this.robot.overhears("hello", response);
    ChuckNorris(this.robot);

    setTimeout(()=>{
      
      response.waitForMessageToBeSent().then(()=>{
        done(new Error("should not have been called"));
      });
        
      done()  
    }, 1000)

    

  });

  
});

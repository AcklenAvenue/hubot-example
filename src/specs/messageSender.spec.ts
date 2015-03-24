/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>

class fakeResponse{
  messageSent: string = "none";

  send = (msg) => {
    this.messageSent = msg
  };      
}

import chai = require('chai');
var expect = chai.expect;
import s = require('../helpers/MessageSender');

describe("The Message Sender", () => {
  
  beforeEach(() => {
    this.messageSender = new s.MessageSender();
    this.response = new fakeResponse();
  });
    
  it("should respond with a message", () => {
    this.messageSender.send(this.response, "test");
    expect(this.response.messageSent).to.equal("test");        
  });

  it("should not allow empty input", () => {
    this.messageSender.send(this.response);
    expect(this.response.messageSent).to.equal("none");        
  });
});
/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>
/// <reference path="./fakes/fakeResponse.ts"/>

import chai = require('chai');
var expect = chai.expect;
import s = require('../helpers/MessageSender');
import f = require('./fakes/FakeResponse');

describe("The Message Sender", () => {
  
  beforeEach(() => {
    this.messageSender = new s.MessageSender();
    this.response = new f.FakeResponse();
  });
    
  it("should respond with a message", () => {
    this.messageSender.send(this.response, "test");
    expect(this.response.messageSent).to.equal("test");        
  });

  it("should not allow empty input", () => {
    this.messageSender.reply(this.response);
    expect(this.response.messageSent).to.equal("none");        
  });
});
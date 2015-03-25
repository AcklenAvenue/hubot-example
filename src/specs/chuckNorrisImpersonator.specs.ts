/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>

import chai = require('chai');
var expect = chai.expect;
import c = require('../helpers/ChuckNorrisImpersonator');
import FakeHttpClient = require('./fakes/FakeHttpClient');

describe("The Chuck Norris Impersonator", () => {
  
  beforeEach(() => {
    this.httpClient = new FakeHttpClient();    
    
  });
  
  describe("when impersonating with name", ()=> {

    var name = "Byron"
    var theJoke = "some joke with " + name;
      
    beforeEach(()=>{            
      var simulatedApiResponseBody = { value: { joke: theJoke } };
      this.httpClient.setupGet("http://api.icndb.com/jokes/random?firstName=" + name + "&lastName=", 
                                  simulatedApiResponseBody);
      this.impersonator = new c.ChuckNorrisImpersonator(this.httpClient.get);      
    })

    it("should return a joke including the given name", (done) => {        
        this.impersonator.impersonate(name)
          .then((response) => {
            expect(response).to.equal(theJoke);
            done()  
          })    
      });    
  })  

  describe("when impersonating without name", ()=> {

    var theJoke = "some joke"
      
    beforeEach(()=>{            
      var simulatedApiResponseBody = { value: { joke: theJoke } };
      this.httpClient.setupGet("http://api.icndb.com/jokes/random", 
                                  simulatedApiResponseBody);
      this.impersonator = new c.ChuckNorrisImpersonator(this.httpClient.get);      
    })

    it("should return a joke", (done) => {        
        this.impersonator.impersonate()
          .then((response) => {
            expect(response).to.equal(theJoke);
            done()  
          })    
      });    
  })  

  describe("when Chuck Norris folds his arms", ()=> {

    var theJoke = "Achievement unlocked: Chuck Norris is quiet!"
      
    beforeEach(()=>{          
      var simulatedApiResponseBody = { value: { joke: '' } };
      this.httpClient.setupGet("http://api.icndb.com/jokes/random", 
                                  simulatedApiResponseBody);
      this.impersonator = new c.ChuckNorrisImpersonator(this.httpClient.get);      
    })

    it("should unlock the achievement", (done) => {        
        this.impersonator.impersonate()
          .then((response) => {
            expect(response).to.equal(theJoke);
            done()  
          })    
      });    
  })  

  describe("when Chuck Norris fakes an error", ()=> {

    var error = "you have a problem"
    var chuckNorrisResponse = "Chuck Norris says: " + error
      
    beforeEach(()=>{          
      this.httpClient.setupGetThrows(error);
      this.impersonator = new c.ChuckNorrisImpersonator(this.httpClient.get);      
    })

    it("should tell the user he has a problem", (done) => {        
        this.impersonator.impersonate()
          .then((response) => {
            expect(response).to.equal(chuckNorrisResponse);
            done()  
          })    
      });    
  })  

});
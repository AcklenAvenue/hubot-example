/// <reference path="../../../typings/es6-promise/es6-promise.d.ts" />

import rsvp = require('es6-promise');
var Promise = rsvp.Promise;
	
class FakeHttpClient {

	static _get: any;
	static _error: string;

	setupGetThrows(err: string){
		FakeHttpClient._error = err;
	}

	setupGet(url: string, responseBody: any){		
		FakeHttpClient._get = {
			url: url,
			responseBody: responseBody,
		};		
	}

	get(url: string){
		
		if(FakeHttpClient._error){
			return new Promise((resolve, reject) => {
				reject(FakeHttpClient._error);	
			});
		}

		if(!FakeHttpClient._get){
			throw new Error("Please use setupGet to prepare the fake.");
		}
		
		if(FakeHttpClient._get.url!=url){
			throw new Error("Wrong url was used: " + FakeHttpClient._get.url);
		}
		
		var responseBody= FakeHttpClient._get.responseBody;
		
		return new Promise((resolve, reject) => {
			resolve(responseBody);	
		});		
	}	
}

export = FakeHttpClient;
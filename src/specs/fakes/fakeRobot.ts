var _ = require("underscore");

export class FakeRobot {

	private testResponses = [];
	
	hear(exp: RegExp, msg: any){
		var matching = _.find(this.testResponses, (r)=>{
			return exp.test(r.text);
			});

		if(matching){
			msg(matching.response);
		}
	}

	respond(exp: RegExp, msg: any){
		var matching = _.find(this.testResponses, (r)=>{
			return exp.test(r.text);
			});

		if(matching){
			var matches = matching.text.match(exp);
			matching.response.registerMatches(matches);
			msg(matching.response);
		}
	}

	overhears(text: string, response: any){
		this.testResponses.push({text: text, response: response});
	}
}
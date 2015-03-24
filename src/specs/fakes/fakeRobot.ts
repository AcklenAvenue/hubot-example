export class FakeRobot {
	
	hear(exp: string, msg: any){
		var response = this.testResponses[exp];
		if(response){
			msg(response);
		}
	}

	respond(exp: string, msg: any){
		var response = this.testResponses[exp];
		if(response){
			msg(response);
		}
	}

	private testResponses = [];

	overhears(exp: string, response: any){
		this.testResponses[exp] = response;
	}
}
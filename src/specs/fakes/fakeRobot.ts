export class FakeRobot {
	
	respond(exp: string, msg: any){
		var response = this.testResponses[exp];
		if(response){
			msg(response);
		}
	}

	private testResponses = [];

	setup(exp: string, response: any){
		this.testResponses[exp] = response;
	}
}
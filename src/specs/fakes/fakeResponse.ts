export class FakeResponse{
  	messageSent: string = "none";
	messageReplied: string = "none";

	reply = (msg) => {
		this.messageReplied = msg;
	}

	send = (msg) => {
		this.messageSent = msg
	};      
}
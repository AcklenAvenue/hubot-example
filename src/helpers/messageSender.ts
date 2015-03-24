export interface ISendMessages{
	send(response: any, newMessage: string)
}

export class MessageSender implements ISendMessages{
	constructor(){

	}

	send(response: any, newMessage: string) {
		if(newMessage){
			response.send(newMessage)
		}
	}
}
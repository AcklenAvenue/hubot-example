export interface ISendMessages{
	send(response: any, newMessage: string)
}

export class MessageSender implements ISendMessages{
	send(response: any, newMessage: string) {
		if(newMessage){			
			response.send(newMessage)
		}
	}

	reply(response: any, newMessage: string) {
		if(newMessage){
			response.reply(newMessage)
		}
	}
}
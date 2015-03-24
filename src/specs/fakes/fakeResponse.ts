export class FakeResponse{
  messageSent: string = "none";

  send = (msg) => {
    this.messageSent = msg
  };      
}
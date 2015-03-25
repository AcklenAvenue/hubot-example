export interface IImpersonateChuckNorris{
  impersonate(name: string) :any
}

export class ChuckNorrisImpersonator implements IImpersonateChuckNorris{
  
  constructor(private getClient: any){

  }
  
  impersonate(name: string) :any {

    var urlToGet = "http://api.icndb.com/jokes/random"

    if(name)
      urlToGet = urlToGet + "?firstName=" + name + "&lastName="

      var promise = this.getClient(urlToGet);
      
      return promise
        .then((body)=> {   
          var message_from_chuck = JSON.parse(body)
          var joke = message_from_chuck.value.joke;
          
          if(joke.length == 0){
            return "Achievement unlocked: Chuck Norris is quiet!"
          }
          else{
            return joke.replace(/\s\s/g, " ")
          }

      }).catch((err)=>{
        return "Chuck Norris says: " + err;
      })    
  }
}

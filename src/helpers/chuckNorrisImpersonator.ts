interface IImpersonateChuckNorris{
  impersonate(name: string) :any
}

class ChuckNorrisImpersonator implements IImpersonateChuckNorris{
  constructor(private httpClient: any){

  }
  
  impersonate(name: string) :any {
    var urlToGet = "http://api.icndb.com/jokes/random"

    if(name != null)
      urlToGet = urlToGet + "?firstName=" + name + "&lastName="

    return this.httpClient(urlToGet)
      .then((body)=> {

        var message_from_chuck = JSON.parse(body)

        if(message_from_chuck.length == 0){
          return "Achievement unlocked: Chuck Norris is quiet!"
        }
        else{
          return message_from_chuck.value.joke.replace(/\s\s/g, " ")
        }

      }).catch((err)=>{
        return "Chuck Norris says: " + err;
        })    
  }
}
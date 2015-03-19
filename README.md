#Hubot+Typescript

###Why? 
Because TypeScript is the next big thing. Also because hubot scripts are powerful and fun. Why NOT is the better question?

###Hubot is written in coffeescript... what class of witchcraft is at work here??
Yes, Hubot is written in coffeescript. And, normally, hubot scripts are also written in coffeescript. BUT, you can also include normal javascript files (*.js) at hubot scripts. TypeScript compiles down to javascript, so there's no reason why we can't write hubot scripts in TypeScript! 

##Getting started:

###You should have a few things installed globally on your dev machine.
- Node/npm https://nodejs.org/download/
- Hubot `npm install -g coffee-script hubot`
- Grunt `npm install -g grunt-cli`

###You need to install all the project-specific node packages:
- Clone this repo and navigate to the project folder
- `npm install`

###Test the hubot
- `run.bat` will run grunt to compile the ts file(s) and then runs `bin/hubot`
- Try typing `howdy` at the prompt... you should get a response.

###Set up your dev environment:
- Sublime Plugin - https://github.com/raph-amiard/sublime-typescript
- Visual Studio Extension - https://visualstudiogallery.msdn.microsoft.com/2d42d8dc-e085-45eb-a30b-3f7d50d55304

##Get moving:

###Learn Typescript:
- Check out the reference guide at http://www.typescriptlang.org/Handbook
- Try out typescript at http://www.typescriptlang.org/Playground

###Learn Hubot:
- Read about how hubot works at https://hubot.github.com/
- Look at examples at https://github.com/hubot-scripts

###Create a hubot script:
- Create a new file in `/scripts` with extension `.ts`
- Use the `helloWorld.ts` script as a guide
- To compile the `.ts` files to javascript, run `grunt` from the command line
- To compile and run hubot in one command, use `run.bat`

import {KlaruSocketServer} from 'klarusocket'
import {IWaitingGames} from "./Features/Interfaces";
import {TempUser} from "./Entities/TempUser";
import {generateString} from "./Features/functions";
export const server = new KlaruSocketServer();
server.listen(4000,  '0.0.0.0', () => console.log("SERVER STARTED"));
server.subscribe("test", req => {
   console.log("Request");
});
export const waitingGames: IWaitingGames[] = [];


server.subscribe("create-game", req => {
   const [type] = req.data;
   const newGame = {
      gameType: type,
      inviter: new TempUser({}),
      code: generateString(4)
   }
   waitingGames.push(newGame);
   req.reply(newGame.code);
});

server.subscribe("move-figure", req => {

});

server.subscribe("join-game", req => {

});

server.subscribe("start-game", req => {

});
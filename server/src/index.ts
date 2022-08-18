import {KlaruClient, KlaruSocketServer} from 'klarusocket'
import {IWaitingGames} from "./Features/Interfaces";
import {TempUser} from "./Entities/TempUser";
import {generateString} from "./Features/functions";
import {Game} from "./Entities/Game";
import {Vector2} from "./Features/Vector2";
export const server = new KlaruSocketServer();
server.listen(4000,  '0.0.0.0', () => console.log("SERVER STARTED"));
server.subscribe("test", req => {
   console.log("Request");
});
export const waitingGames: IWaitingGames[] = [];
export const games: Game[] = [];

server.subscribe("create-game", req => {
   const [type] = req.data;
   const player = new TempUser(req.sender as KlaruClient);
   const newGame = {
      gameType: type,
      inviter: player,
      code: generateString(4),
      id: Date.now() * Math.random(),
      players: [player]
   }
   waitingGames.push(newGame);
   req.reply(newGame.code);
});

server.subscribe("move-figure", req => {

});

server.subscribe("join-game", req => {
   let [code, nickname] = req.data;
   if(!waitingGames.find(x => x.code == code)) return req.reply("Game already closed");
   const game = waitingGames.filter(x => x.code == code)[0];
   if(nickname.toLowerCase() == "owner")
      nickname = "loh";
   const player = new TempUser(req.sender as KlaruClient, nickname);
   const gameInstance = new Game(game);
   games.push(gameInstance);

   req.reply("successfully");
});

server.subscribe("start-game", req => {
   const [code] = req.data;
   if(!waitingGames.find(x => x.code == code)) return req.reply("Game already closed");
   const game = waitingGames.filter(x => x.code == code)[0];
   games.push(game);

   req.reply("successfully");
});


export function setupBoardRPC = (id: number, opts: ISetupBoardOptions) => sendToAll(id, "setupBoardRPC", opts);


function sendToAll(id: number, name: string, data: any): void{
   const game = games[games.findIndex(x => x.id === id)];
   for(const k in game.players){
      game.players[k].client.get(name, JSON.stringify(data));
   }
}

interface ISetupBoardOptions{
   boardSize: number;
   figures: {[key: Vector2]: Figure}
}
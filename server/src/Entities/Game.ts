import {IWaitingGames} from "../Features/Interfaces";
import {TempUser} from "./TempUser";
import {GameType} from "../Features/Types";

export class Game implements IWaitingGames{
    public readonly code: string;
    public readonly inviter: TempUser
    public readonly gameType: GameType;
    public readonly id: number;
    public readonly players: TempUser[];

    public constructor(waitingGame: IWaitingGames) {
        this.code = waitingGame.code;
        this.inviter = waitingGame.inviter;
        this.gameType = waitingGame.gameType;
        this.id = waitingGame.id;
        this.players = waitingGame.players;
    }
}
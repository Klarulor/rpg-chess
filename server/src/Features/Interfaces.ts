import {TempUser} from "../Entities/TempUser";
import {GameType} from "./Types";
export interface IWaitingGames{
    code: string;
    inviter: TempUser
    gameType: GameType;
    id: number;
    players: TempUser[];
}
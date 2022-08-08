import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";

export class KnightGameFigure extends GameFigure{
    private static AVAILABLE_DIRECTIONS: number[][] = [[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1]];
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ?  "../../../Textures/Sprites/WhiteRook.png" : "../../../Textures/Sprites/WhiteRook.png";
    }
    public readonly type: GameFigureType = GameFigureType.Knight;
    public position: Vector2 = new Vector2();
    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean{
        if(cells[newPosition.x][newPosition.y].figure?.side == this.side ||
            cells[newPosition.x][newPosition.y].figure?.type != GameFigureType.King) return false;
        return KnightGameFigure.AVAILABLE_DIRECTIONS.includes(Vector2.Subtract(newPosition, this.position).toArray());
    }
}
import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";

export class RookGameFigure extends GameFigure{
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ?  "../../../Textures/Sprites/WhiteRook.png" : "../../../Textures/Sprites/WhiteRook.png";
    }
    public readonly type: GameFigureType = GameFigureType.Rook;
    public position: Vector2 = new Vector2();
    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean{
        if(this.position.x != newPosition.x || this.position.y != newPosition.y) return false;
        const d = Vector2.Divide(newPosition, newPosition.abs());
        for(let i = 1; i <= Math.abs(newPosition.length); i += Math.abs(d.length)){
            const pos = Vector2.Add(this.position, Vector2.MultiplyNumber(d, i));
            if(cells[pos.x][pos.y]?.figure?.type == this.type || cells[newPosition.x][newPosition.y].figure?.type != GameFigureType.King)
                return false;
        }
        return true;
    }
}
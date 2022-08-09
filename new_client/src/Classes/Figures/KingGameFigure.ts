import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";
import blackKingImg from "../../Textures/Sprites/BlackKing.png";
import whiteKingImg from "../../Textures/Sprites/WhiteKing.png";

export class KingGameFigure extends GameFigure {
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ? whiteKingImg : blackKingImg;
        this.powerValue = 0;
    }

    public readonly type: GameFigureType = GameFigureType.King;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        // can move like queen but have to be one step away from other figures
        return (Math.abs(newPosition.x - this.position.x) == 1 && Math.abs(newPosition.y - this.position.y) == 1) || (Math.abs(newPosition.x - this.position.x) == 0 && Math.abs(newPosition.y - this.position.y) == 1) || (Math.abs(newPosition.x - this.position.x) == 1 && Math.abs(newPosition.y - this.position.y) == 0);
    }
}
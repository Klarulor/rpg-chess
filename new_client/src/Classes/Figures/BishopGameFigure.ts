import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";
import blackBishopImg from "../../Textures/Sprites/BlackBishop.png";
import whiteBishopImg from "../../Textures/Sprites/WhiteBishop.png";

export class BishopGameFigure extends GameFigure {
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ? whiteBishopImg : blackBishopImg;
        this.powerValue = 3;
    }

    public readonly type: GameFigureType = GameFigureType.Bishop;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        // can move only 45 degrees diagonal directions
        return (Math.abs(newPosition.x - this.position.x) == Math.abs(newPosition.y - this.position.y));
    }
    protected canTake(cells: ICellProps[][], newPosition: Vector2): boolean {
       return (Math.abs(newPosition.x - this.position.x) == Math.abs(newPosition.y - this.position.y));
    }
    protected canPromote(cells: ICellProps[][], newPosition: Vector2): boolean {
        return false;
    }
}
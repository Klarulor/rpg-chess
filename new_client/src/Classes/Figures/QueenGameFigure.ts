import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";
import whiteQueenImg from "../../Textures/Sprites/WhiteQueen.png";
import blackQueenImg from "../../Textures/Sprites/BlackQueen.png";


export class QueenGameFigure extends GameFigure {
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ? blackQueenImg : whiteQueenImg;
        this.powerValue = 10;
    }

    public readonly type: GameFigureType = GameFigureType.Queen;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        // can move only 45 degrees diagonal directions and straight directions and not through other figures and not through the same side figures
        return (Math.abs(newPosition.x - this.position.x) == Math.abs(newPosition.y - this.position.y) || newPosition.x == this.position.x || newPosition.y == this.position.y);
    }
}
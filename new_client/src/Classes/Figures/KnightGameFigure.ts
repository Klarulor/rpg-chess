import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";
import WhiteKnightImg from "../../Textures/Sprites/WhiteKnight.png";
import BlackKnightImg from "../../Textures/Sprites/BlackKnight.png";

export class KnightGameFigure extends GameFigure {
    private static AVAILABLE_DIRECTIONS: number[][] = [[-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1]];

    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ? WhiteKnightImg : BlackKnightImg;
        this.powerValue = 3;
    }

    public readonly type: GameFigureType = GameFigureType.Knight;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        // can move only in available directions
        for(let i = 0; i < KnightGameFigure.AVAILABLE_DIRECTIONS.length; i++) {
            if(newPosition.x == (this.position.x + KnightGameFigure.AVAILABLE_DIRECTIONS[i][0]) && newPosition.y == (this.position.y + KnightGameFigure.AVAILABLE_DIRECTIONS[i][1])) {
                return true;
            }
        }
    }
}
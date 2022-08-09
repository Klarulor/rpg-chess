import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board";
import {Side} from "../../Features/Types";
import {ICellProps} from "../../Interfaces/Interfaces";
import blackBishopImg from "@/sprites/BlackBishop.png";
import whiteBishopImg from "@/sprites/WhiteBishop.png";

export class BishopGameFigure extends GameFigure {
    constructor(color: Side) {
        super();
        this.side = color;
        this.imgSrc = color === "WHITE" ? whiteBishopImg : blackBishopImg;
    }

    public readonly type: GameFigureType = GameFigureType.Bishop;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        const d = Vector2.Subtract(newPosition, this.position).normalize();
        const abD = Vector2.Create(Math.abs(d.x), Math.abs(d.y));
        if (!(Vector2.Dot(abD, Vector2.One) <= 5 && (d.x != 0 && d.y != 0))) return false;
        return true;
    }
}
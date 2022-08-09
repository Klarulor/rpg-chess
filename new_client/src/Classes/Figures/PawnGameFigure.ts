import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board";
import {Side} from "../../Features/Types";

import WhitePawn from "../../Textures/Sprites/WhitePawn.png";

import BlackPawn from "../../Textures/Sprites/BlackPawn.png";
import {ICellProps} from "../../Interfaces/Interfaces";

export class PawnGameFigure extends GameFigure {
    constructor(side: Side) {
        super();
        this.side = side;
        this.imgSrc = side === "WHITE" ? WhitePawn : BlackPawn;
    }

    public readonly type: GameFigureType = GameFigureType.Pawn;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        if (!newPosition.equals(Vector2.AddY(this.position, -1))) {
            return ((!newPosition.equals(Vector2.AddX(this.position, -1)) || !newPosition.equals(Vector2.AddX(this.position, 1)))
                && this.position.y - 1 == newPosition.y && cells[newPosition.x][newPosition.y]?.figure?.type != GameFigureType.King)
        }
        return !cells[newPosition.x][newPosition.y].figure;
    }
}
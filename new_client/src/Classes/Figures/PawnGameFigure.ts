import GameFigure from "../GameFigure";
import {GameFigureType} from "../../Features/Enums";
import {Vector2} from "../../Features/Vector2";
import {Board} from "../../Components/Board/Board";
import {Side} from "../../Features/Types";

import WhitePawn from "../../Textures/Sprites/WhitePawn.png";

import BlackPawn from "../../Textures/Sprites/BlackPawn.png";
import {ICellProps} from "../../Interfaces/Interfaces";

export class PawnGameFigure extends GameFigure {
    constructor(side: Side) {
        super();
        this.side = side;
        this.imgSrc = side === "WHITE" ? WhitePawn : BlackPawn;
        this.powerValue = 1;
    }

    public readonly type: GameFigureType = GameFigureType.Pawn;
    public position: Vector2 = new Vector2();

    protected canMove(cells: ICellProps[][], newPosition: Vector2): boolean {
        if(!this.wasMoved) {
            return (newPosition.y == (this.position.y-2) || newPosition.y == (this.position.y-1)) && newPosition.x == (this.position.x);
        }
        return newPosition.y == (this.position.y-1) && newPosition.x == (this.position.x);
    }

    protected canTake(cells: ICellProps[][], newPosition: Vector2): boolean {
        return (newPosition.y == (this.position.y-1) && (newPosition.x == (this.position.x + 1) || newPosition.x == (this.position.x - 1))) && cells[newPosition.x][newPosition.y].figure !== null;
    }

    protected canPromote(cells: ICellProps[][], newPosition: Vector2): boolean {
        return this.canMove(cells, newPosition) && newPosition.y == 0;
    }
}
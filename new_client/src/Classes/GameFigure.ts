import {GameFigureType} from "../Features/Enums";
import {Vector2} from "../Features/Vector2";
import {Side} from "../Features/Types";
import {ICellProps} from "../Interfaces/Interfaces";

export default abstract class GameFigure {
    public imgSrc: string = "";
    public side: Side = "WHITE";
    public readonly type: GameFigureType = GameFigureType.Pawn;
    public position: Vector2 = new Vector2();
    public powerValue: number = 0;

    protected abstract canMove(cells: ICellProps[][], newPosition: Vector2): boolean;

    public canMoveFigure = (cells: ICellProps[][], newPosition: Vector2): boolean => this.canMove(cells, newPosition);
}
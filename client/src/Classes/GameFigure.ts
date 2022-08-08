import {GameFigureType} from "../Features/Enums";
import {Cell} from "../Components/Cell";
import {Vector2} from "../Features/Vector2";
import {Board, bountyBoard} from "../Components/Board";
import {Side} from "../Features/Types";
// @ts-ignore
import randomLogo from "../Textures/Sprites/BlackKing.png";
import {BoardContext} from "../Context/BoardContext";
import {ICellProps} from "../Interfaces/Interfaces";

export default abstract class GameFigure {
    public imgSrc: typeof randomLogo;
    public side: Side = "WHITE";
    public readonly type: GameFigureType = GameFigureType.Pawn;
    public position: Vector2 = new Vector2();
    protected abstract canMove(cells: ICellProps[][], newPosition: Vector2): boolean;
    public canMoveFigure = (cells: ICellProps[][], newPosition: Vector2): boolean => bountyBoard(newPosition) && this.canMove(cells, newPosition);

}
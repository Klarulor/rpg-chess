export default abstract class GameFigure {
    public imgSrc: string = "";
    public side: Side = "WHITE";
    public readonly type: GameFigureType = GameFigureType.Pawn;
    public position: Vector2 = new Vector2();
    public powerValue: number = 0;
    public wasMoved: boolean = false;
}
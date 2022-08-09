import GameFigure from "../Classes/GameFigure";
import {Vector2} from "../Features/Vector2";
import {Side} from "../Features/Types";

export interface ICellProps {
    color: Side;
    figure?: GameFigure;
    position: Vector2;
}
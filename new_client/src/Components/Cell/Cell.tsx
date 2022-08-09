import React, {FC, memo, useMemo, useState} from "react";
import {ICellProps} from "../../Interfaces/Interfaces";
import GameFigure from "../../Classes/GameFigure";
import {Vector2} from "../../Features/Vector2";
// @ts-ignore
import randomLogo from "../../Textures/Sprites/BlackKing.png";
import {useBoard} from "../../Hooks/use-board";
import {PawnGameFigure} from "../../Classes/Figures/PawnGameFigure";
import {GameFigureType} from "../../Features/Enums";
import styles from './Cell.module.scss';
import classNames from "classnames";
import {useDrag, useDrop} from 'react-dnd'
import {KnightGameFigure} from "../../Classes/Figures/KnightGameFigure";
import {BishopGameFigure} from "../../Classes/Figures/BishopGameFigure";
import {Figure} from "../Figure/Figure";
export const Cell: FC<ICellProps> = (({figure, color, position}) => {
    const {setCell, cells, setCells} = useBoard();

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [`Pawn`,
                `Knight`,
                `Bishop`,
                `Rook`,
                `Queen`,
                `King`],
        drop: (item) => moveFigure(item.figure, position),
        canDrop: (item: any) => item.figure.canMoveFigure(cells, position),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    const moveFigure = (figure: GameFigure, position: Vector2) => {
        const oldPosition = figure.position;
        console.log(oldPosition, position);
        cells[oldPosition.y][oldPosition.x].figure = null;
        figure.position = new Vector2(position.x, position.y);
        cells[position.y][position.x].figure = figure;
        setCells([...cells]);
    }

    return <div className={classNames(styles.cell, styles[`cell_${color}`], {
        [styles.canDrop]: canDrop,
        [styles.isOver]: isOver,
    })} ref={drop} >
        {figure && <Figure figure={figure}/>}
    </div>;
})

// export class Cell extends React.Component<any, any>{
//     public readonly color: string;
//     public figure?: GameFigure;
//     public position: Vector2 = new Vector2();
//
//     // private figureImg?: typeof randomLogo;
//
//
//     constructor(props: CellConstructor) {
//         super(props);
//         this.color = props.color;
//         console.log(props.figure);
//         this.state = {
//             img: props.figure?.imgSrc
//         }
//     }
//     render(){
//
//         return <div className={"cell " + this.color}>
//                         <img src={this.state.img} onClick={()=>{console.log(this.state.img)}}/>
//                   </div>;
//     }
// }
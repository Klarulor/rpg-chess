import React, {FC, memo, useState} from "react";
import {ICellProps} from "../Interfaces/Interfaces";
import GameFigure from "../Classes/GameFigure";
import {Vector2} from "../Features/Vector2";
// @ts-ignore
import randomLogo from "../Textures/Sprites/BlackKing.png";
import {useBoard} from "../Hooks/use-board";
import {PawnGameFigure} from "../Classes/Figures/PawnGameFigure";
import {GameFigureType} from "../Features/Enums";

export const Cell: FC<ICellProps> = memo(({figure, color, position}) => {
    const {setCell} = useBoard();
    function onClick(){
        setCell(new Vector2(position.x, position.y), {color:color, figure: new PawnGameFigure(figure?.side == 'WHITE' ? 'BLACK' : 'WHITE'), position})
    }
    return <div onClick={onClick} className={"cell " + color.toLowerCase()}>
        <img src={figure?.imgSrc} alt={GameFigureType[figure?.type || 0]} />
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
import React, {useContext, useEffect, useMemo, useState} from "react";
import {Cell} from "./Cell";
import {Vector2} from "../Features/Vector2";
import {PawnGameFigure} from "../Classes/Figures/PawnGameFigure";
import {useBoard} from "../Hooks/use-board";
import {ICellProps} from "../Interfaces/Interfaces";
import {BoardContext} from "../Context/BoardContext";

export const Board = () => {
    const {cells, setCells} = useBoard();
    const [test, setTest] = useState(1)

    useEffect(() => {
        const localCells: ICellProps[][] = []
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (!localCells[i])
                    localCells[i] = [];
                const isWhile = (j % 2 != (i % 2 == 0 ? 1 : 0))
                const figure = new PawnGameFigure("WHITE");
                localCells[i][j] = {color: isWhile ? "WHITE" : "BLACK", position: new Vector2(i, j), figure};
            }
        }
        setCells(localCells);
    }, [])

    const normalizedCells = useMemo(() => {
        return cells.reduce((a, b) => a.concat(b), [])
    }, [cells])

    return <div className="board">
        {normalizedCells.map((cell, i) => <Cell position={cell.position} figure={cell.figure} key={i}
                                                color={cell.color}/>)}
    </div>
}

export const bountyBoard = (pos: Vector2): boolean => pos.x <= 8 && pos.x >= 0 && pos.y <= 8 && pos.y >= 0;

// export class Board extends React.Component<any, any>{
//     public static instance: Board;
//     public cells: Cell[][] = [];
//     constructor(props: any){
//         super(props);
//         this.state = {
//
//         }
//         Board.instance = this;
//         this.initCells();
//         this.setupFigures();
//     }
//     render(){
//         const cells: Cell[] = [];
//         for(let i = 0; i < 8; i++){
//             for(let j = 0; j < 8; j++){
//                 cells.push(this.cells[i][j]);
//             }
//         }
//         return <div className={"board"}>
//             {cells.map((item, index)=>
//                 <Cell key={index} color={item.color} />
//             )}
//         </div>
//     }
//     private initCells(): void{
//         this.cells = [];
//         for(let i = 0; i < 8; i++){
//             for(let j = 0; j < 8; j++){
//                 if(!this.cells[i])
//                     this.cells[i] = [];
//                 const isWhile = (j % 2 != (i % 2 == 0 ? 1 : 0))
//                 this.cells[i][j] = new Cell( {color: isWhile ? "white" : "black", position: new Vector2(i,j)});
//                 this.cells[i][j].setFigure(new PawnGameFigure("WHITE"));
//             }
//         }
//     }
//     private setupFigures(): void{
//
//     }
//
// }

import {Cell} from "../Components/Cell";
import {FC, createContext, useState, PropsWithChildren, useCallback} from 'react';
import {ICellProps} from "../Interfaces/Interfaces";
import {Vector2} from "../Features/Vector2";
import GameFigure from "../Classes/GameFigure";

export interface BoardContext {
    cells: ICellProps[][];
    setCells: (cells: ICellProps[][]) => void
    setCell: (pos: Vector2, cell: ICellProps) => void
    getCell: (pos: Vector2) => ICellProps
}

export const BoardContext = createContext<BoardContext>({} as BoardContext)

export const BoardProvider: FC<PropsWithChildren> = ({children}) => {
    const [cells, setCells] = useState<ICellProps[][]>([])
    const setCell = useCallback((pos: Vector2, cell: ICellProps) => {
        cells[pos.x][pos.y] = cell;
        setCells([...cells])
    }, [cells])
    const getCell = useCallback((pos: Vector2) => {
        return cells[pos.x][pos.y];
    }, [cells])
    return <BoardContext.Provider value={{cells, setCells, setCell, getCell}}>
        {children}
    </BoardContext.Provider>
}
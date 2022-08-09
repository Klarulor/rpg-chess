import {FC} from "react";
import GameFigure from "../../Classes/GameFigure";
import styles from "./Figure.module.scss";
import {DragPreviewImage, useDrag} from "react-dnd";
import {GameFigureType} from "../../Features/Enums";

export const Figure:FC<{figure: GameFigure}> = ({figure}) => {
    const [{isDragging},drag, preview] = useDrag({
        item: { figure },
        type: GameFigureType[figure.type],
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return <>
        <div className={styles.figure} ref={drag}>
            <img src={figure.imgSrc} alt="figure" style={{opacity: isDragging ? '0.5' : '1'}} className={styles.figure__img}/>
        </div>
    </>
}
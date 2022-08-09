import {Board} from "../Board/Board";
import {Vector2} from "../../Features/Vector2";
import styles from './Game.module.scss';

export const Game = () => {
    return <div className={styles.game}>
        <Board size={new Vector2(15, 15)} />
    </div>
}
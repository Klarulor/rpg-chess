import {Board} from "../Board/Board";
import {Vector2} from "../../Features/Vector2";
import styles from './Home.module.scss';
import {useNavigate} from "react-router";

export const Home = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/wait')
    }
    return <div className={styles.game}>
        <input className={styles.username} placeholder="Никнейм"></input>
        <button className={styles.play} onClick={onClick}>Начать игру</button>
    </div>
}
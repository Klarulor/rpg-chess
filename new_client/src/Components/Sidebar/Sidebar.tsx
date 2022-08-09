import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.scss';
import {FC, PropsWithChildren} from "react";
import classNames from 'classnames';
import Logo from "../../Textures/Images/logo.svg";

export const Sidebar: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.sidebar}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}>
                    <NavLink to={"/"} className={({isActive}) => classNames(styles.nav__logo)} >
                        <img src={Logo} alt="logo" className={styles.nav__logo}/>
                    </NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to={"/"} className={({isActive}) => classNames(styles.nav__link, {[styles.nav__link_active]: isActive})} >Play</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to={"/figures"} className={({isActive}) => classNames(styles.nav__link, {[styles.nav__link_active]: isActive})}>Figures</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to={"/store"} className={({isActive}) => classNames(styles.nav__link, {[styles.nav__link_active]: isActive})}>Store</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to={"/"} className={({isActive}) => classNames(styles.nav__link, {[styles.nav__link_active]: isActive})}>Friends</NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to={"/"} className={({isActive}) => classNames(styles.nav__link, {[styles.nav__link_active]: isActive})}>Settings</NavLink>
                </li>
            </ul>
    </div>
}
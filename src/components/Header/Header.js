import React from 'react';
import classes from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://i.ibb.co/sy9D123/logo.png'/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>

}

export default Header;
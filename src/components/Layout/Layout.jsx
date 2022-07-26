import React from "react";
import {Outlet} from "react-router-dom";
import Home from "../Home/Home";

const Layout = (props) => {
    return (
    <>
        <Home playerHealth={props.playerHealth} playerAttack={props.playerAttack} playerSpeed={props.playerSpeed} playerArmor={props.playerArmor} playerCoins={props.playerCoins} pickClass={props.pickClass} />
        <Outlet />
    </>
    );
};

export default Layout;
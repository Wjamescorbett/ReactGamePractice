import React from "react";
import {Outlet} from "react-router-dom";
import Home from "../Home/Home";

const Layout = (props) => {
    return (
    <>
        <Home playerHealth={props.playerHealth} playerAttack={props.playerAttack} />
        <Outlet />
    </>
    );
};

export default Layout;
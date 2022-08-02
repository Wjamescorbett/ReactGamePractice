import React from "react";
import {Outlet} from "react-router-dom";
import Home from "../Home/Home";

const Layout = () => {
    return (
    <>
        <Home />
        <Outlet />
    </>
    );
};

export default Layout;
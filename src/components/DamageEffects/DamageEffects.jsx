import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DamageEffects = (props) => {

    return(
        <div>
            <button className="attackMove" onClick={() => props.playerAttackMove(1)}>Attack enemy 1</button>
            <ToastContainer />
            <button className="dodgeMove" onClick={() => props.playerDodgeMove()}>Dodge Attack</button>
            <button className="healMove">Heal</button>
        </div>
    )
}

export default DamageEffects;
import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const DamageEffects = (props) => {
        return(
            <div>
                <h1>You did {props.playerDamageDone} damage.</h1>
            </div>
        )
}

export default DamageEffects;
import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DamageEffects = (props) => {
    
    const showToastMessage = () => {
        toast.success('TEST Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
        return(
            <div>
                <h1> {showToastMessage} Notify</h1>
                        <ToastContainer />
                <h1>You did {props.playerDamageDone} damage.</h1>
                <h1>You took {props.enemyDamageDone} damage.</h1>
            </div>
            
        )
}

export default DamageEffects;
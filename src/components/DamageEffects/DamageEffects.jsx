import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


const DamageEffects = (props) => {
        return(
            <div>
                <h1>You did {props.playerDamageDone} damage.</h1>
                <h1>You took {props.enemyDamageDone} damage.</h1>
                {/* <div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer />
                    toast('work?', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                </div> */}
            </div>
            
        )
}

export default DamageEffects;
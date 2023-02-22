import React , { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GameMap = (props) => {
        return(
            <div className="w-75 bg-danger">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-12 d-flex justify-content-end">
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room One</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Two</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Three</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Four</button>
                        </div>
                            <div class="col-12 d-flex justify-content-end">
                                <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Five</button>-
                                <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Six</button>-
                                <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Seven</button>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Eight</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Nine</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Ten</button>-
                            <button className={'btn btn-primary'} style={{ width: "225px", height: "125px",}}>Room Eleven</button>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <button className={'btn btn-primary'} style={{ width: "300px", height: "125px",}}>Room Twelve</button>-
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default GameMap;
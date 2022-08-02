import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Layout from "./Layout/Layout";
import GameBoard from './GameBoard/GameBoard';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
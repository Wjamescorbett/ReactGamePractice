import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <nav>
            <h1>this is the homepage</h1>
            <ul>
                <li>
                    <Link to="/GameBoard">Link to GameBoard</Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default Home;
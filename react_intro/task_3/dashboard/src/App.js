import React from 'react';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';


function App() {
    const year = getFullYear();
    const footerCopy = getFooterCopy(true);
    return (
        <>
            <div className="App-header">
                <img src={require("./HolbertonLogo.jpg")} alt="logo" />
                <p>School dashboard</p>
            </div>
            <div class="line"></div>
            <div className="App-body">
                <h3>Login to access the full dashboard</h3>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />
                <button>OK</button>
            </div>
            <div className="line"></div>
            <div className="App-footer">
                <p>{footerCopy} - {year}</p>
            </div>
        </>
    );
}

export default App;

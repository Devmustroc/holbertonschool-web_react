import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notification from "../Notifications/Notifications";
import './App.css';


function App() {
    const footerCopyright = `${getFooterCopy(true)} - ${getFullYear()}`
    return (
        <>
            <Notification />
            <div className="App">
                <Header />
                <div className="line"></div>
                <Login />
                <div className="line"></div>
                <Footer text={footerCopyright}/>
            </div>
        </>

    );
}

export default App;

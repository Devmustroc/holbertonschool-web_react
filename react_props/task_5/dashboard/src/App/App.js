import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import './App.css';


function App({ isLoggedIn }) {
    const footerCopyright = `${getFooterCopy(true)} - ${getFullYear()}`
    return (
        <>
            <div className="App">
                <div className="header-wrapper">
                    <div className="App-header">
                        <Header />
                    </div>
                    <Notification />
                </div>
                <div className="line"></div>
                <div className="App-body">
                    {isLoggedIn ? <CourseList /> : <Login />}
                </div>
                <div className="line"></div>
                <div className="App-footer">
                <Footer text={footerCopyright}/>
                </div>
            </div>
        </>

    );
}

const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
];

App.defaultProps = {
    isLoggedIn: true
};

App.defaultProps = {
    isLoggedIn: PropTypes.bool
};

export default App;

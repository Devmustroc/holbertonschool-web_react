import React, { Fragment } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notification from "../Notifications/Notifications";
import PropTypes from "prop-types";
import './App.css';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2,name: 'Webpack',credit: 20},
    {id: 3,name: 'React',credit: 40}
];

const listNotifications = [
    { id: 1,type: 'default',value: 'New course available' },
    { id: 2,type: 'urgent',value: 'New resume available' },
    { id: 3,type: 'urgent',html: {__html: getLatestNotification()}}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey(event) {
        const isCtrl = event.ctrlKey;

        if (isCtrl && event.key === 'h') {
            event.preventDefault();
            alert('Logging you out');
            this.props.logOut();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey);
    }

    render() {
        const footerCopyright = `${getFullYear()} - ${getFooterCopy(true)}`;
        const { isLoggedIn } = this.props;

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
                        {
                            isLoggedIn ?
                                <BodySectionWithMarginBottom title="Course list">
                                    <CourseList listCourses={listCourses} />
                                </BodySectionWithMarginBottom> :
                                <BodySectionWithMarginBottom title="Log in to continue">
                                    <Login />
                                </BodySectionWithMarginBottom>
                        }
                        <BodySectionWithMarginBottom title="News from the School">
                            <p>Some random text</p>
                        </BodySectionWithMarginBottom>
                    </div>
                    <div className="line"></div>
                    <div className="App-footer">
                        <Footer text={footerCopyright}/>
                    </div>
                </div>
            </>
        )
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
};

export default App;

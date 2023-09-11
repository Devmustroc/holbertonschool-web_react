import React, { Component } from 'react';
import {getFooterCopy, getFullYear, getLatestNotification} from "../utils/utils";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notification from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handlkeKeyDown = (event) => {
        if (event.ctrKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    render() {
      const {isLogged} = this.props;
      const footerCopyright = `${getFooterCopy(true)} - ${getFullYear()}`;

      const listCourses = [
            {id: 1, name: 'ES6', credit: 60},
            {id: 2, name: 'Webpack', credit: 20},
            {id: 3, name: 'React', credit: 40}
      ];
      const listNotifications = [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'},
            {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
      ];
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
                      {this.isLoggedIn ? <CourseList listCourse={listCourses}/> : <Login />}
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

App.defaultProps = {
    isLoggedIn: true,
    logOut: () => {},
};

App.defaultProps = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

export default App;

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import App from './App';

describe('App.test.js', () => {
    it('App renders without crashing', () => {
        shallow(<App />);
    })

    it('Contains Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBe(true);
    })

    it('App renders header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    })

    it('App renders Login', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBe(false);
    })

    it('App renders footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    })

    it('App renders Footer with correct text', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').html()).toContain('2023 - Holberton School');
    })
});

describe('<App />', () => {
    it('test that the Login is not displayed', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<Login />)).toBe(false);
    });
    it('Tests that CourseList component is rendered', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<CourseList />)).toBe(true);
    });
})

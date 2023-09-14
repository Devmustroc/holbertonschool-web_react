import React from 'react';
import App from './App';
import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../Login/Login';


describe('<App />', () => {
    it('Tests that App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Contains Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toBe(1);
    })

    it('Contains Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBe(true);
    })

    it('Contains Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toBe(1);
    })

    it('Tests that CourseList is not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList').length).toBe(0);
    })
});

describe('<App />', () => {
    it('Tests that the Login component is not rendered', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find('Login').length).toBe(0);
    })

    it('Tests that CourseList component is rendered', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('CourseList').length).toBe(1);
    })
});

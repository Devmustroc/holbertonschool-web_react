import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App.test.js', () => {
    it('App renders without crashing', () => {
        shallow(<App />);
    });

    it('App renders header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('App renders footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('App renders Login', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('App renders Footer with correct text', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').html()).toContain('2023 - Holberton School');
    });
});

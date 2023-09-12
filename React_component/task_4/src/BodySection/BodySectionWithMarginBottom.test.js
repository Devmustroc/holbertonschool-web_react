import React from 'react';
import BodySection from './BodySection';
import { shallow, mount } from '../../config/setupTests';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
    it ('Checks that component correctly renders a <BodySection /> component', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>);
        expect(wrapper.find(BodySection)).props().title.toBe('test title');
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});

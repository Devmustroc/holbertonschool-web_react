import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('test that NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Passes dumby `type` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem type="urgent" />);
        expect(wrapper.html()).toContain('urgent');
    });
    it('Passes some `value` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem value="This is a success notification" />);
        expect(wrapper.html()).toContain('This is a success notification');
    });
    it('Passes some `html` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHTML'}} />);
        expect(wrapper.html()).toContain('dangerouslySetInnerHTML');
    });
});

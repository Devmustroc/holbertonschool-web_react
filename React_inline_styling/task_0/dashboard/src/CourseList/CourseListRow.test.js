import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";


describe('<CourseListRow />', () => {
    it('check to test the component renders one cell with' +
        ' colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
        expect(wrapper.find('th').length).toBe(1);
        expect(wrapper.find('th').props().colSpan).toBe('2');
    });

    it('check to test the component renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
        expect(wrapper.find('th').length).toBe(2);
        expect(wrapper.find('th').first().text()).toBe('test1');
        expect(wrapper.find('th').last().text()).toBe('test2');
    });

    it('Tests that the component renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'Test'} textSecondCell={'Test'}/>);
        expect(wrapper.find('tr td').length).toBe(2);
    });
});

import React from 'react';
import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';
import CourseList from "./CourseList";

describe('<CourseList />', () => {
    it('Tests that CourseList renders without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check that it renders the 5 different rowsCheck ' +
        'that it renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow').length).toBe(5);
    });
});

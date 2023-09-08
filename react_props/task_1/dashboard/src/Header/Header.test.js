import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('<Header />', () => {
    it('renders a <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });
    it('renders a <Header /> component and checks contents', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
    });
});

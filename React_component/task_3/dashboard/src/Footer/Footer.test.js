import React from 'react';
import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';
import Footer from './Footer';


describe('<Footer />', () => {
    it('renders a <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);
        });
        it('renders a <Footer /> component and checks contents', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toEqual('\"2023 - Holberton School\"');
    });
});

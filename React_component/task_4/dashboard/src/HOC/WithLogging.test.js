import React from 'react';
import Login from '../Login/Login';
import { mount, unmount } from '@wojtekmaj/enzyme-adapter-react-17';
import WithLoggingHOC from './WithLogging';

describe('<WithLoggingHOC />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it (`Test that console.log contains 'Component' on mount when wrapped element is PURE html`, () => {
        console.log = jest.fn();
        const Example = WithLoggingHOC(() => <div>Example</div>);
        const wrapper = mount(<Example />);
        expect (console.log).toHaveBeenCalledWith('Component Example is mounted');
        wrapper.unmount();
    })

    it (`Tests that console.log contains name of wrapped element when mounted or unmounted`, () => {
        console.log = jest.fn();
        const Example = WithLoggingHOC(() => <p>Component</p>);
        const wrapper = mount(<Example />);
        expect (console.log).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
    });

    it(`Tests that console.log contains name of wrapped element when mounted or unmounted`, () => {
        console.log = jest.fn();
        const Example = WithLoggingHOC(() => <p>Component</p>);
        const wrapper = mount(<Example />);
        expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    });
});

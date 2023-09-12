import React from "react";
import { shallow } from "@wojtekmaj/enzyme-adapter-react-17";
import Login from "./Login";

describe("<Login />", () => {
    it("renders a <Login /> component", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toHaveLength(1);
    });
    it("test the component renders", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });

});

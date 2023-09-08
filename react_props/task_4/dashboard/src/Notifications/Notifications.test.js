import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";



describe("Notifications", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it("renders a list with three items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').children()).toHaveLength(3);
    });

    it ("renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it("renders the text 'Here is the list of notifications'", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains('Here is the list of notifications')).toBe(true);
    });

    it('check that the menu item is being displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.contains('Your notifications')).toBe(false);
    })

    it("check that the menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains('Your notifications')).toBe(true);
    })

    it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains(<div className="Notifications"></div>)).toBe(true);
    })
});

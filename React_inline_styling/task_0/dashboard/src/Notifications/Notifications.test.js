import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('<Notifications />', () => {
    it('tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Checks first Item renders correct html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Your notifications');
    })

    it('Tests that menuItem is rendered when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    })

    it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').length).toBe(0);
    })

    it('Tests that menuItem is rendered when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        expect(wrapper.find('.menuItem').length).toBe(1);
    })

    it('Tests that the div Notifications is rendered when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        wrapper.update()
        const item = wrapper.find('div.Notifications');
        expect(item.length).toBe(1);
    })

    it('Tests when passing empty array', () => {
        const wrapper = shallow(<Notifications notifications={[]} />);
        expect(wrapper.find('.NotificationItem').length).toBe(0);
    })

    it('Tests when passing NO array', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.NotificationItem').length).toBe(0);
    })
});

describe('Test the NotificationItem Component', () => {
    let listNotifications;
    beforeEach(() => {
        listNotifications = [
            {
                id: 1,
                type: 'default',
                value: 'New course available'
            },
            {
                id: 2,
                type: 'urgent',
                value: 'New resume available'
            },
            {
                id: 3,
                type: 'urgent',
                html: {__html: '<u>test</u>'}
            }
        ];
    });
    it('Tests that Notifications renders 3 list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('Tests that Notifications renders the good text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotification} />);
        const p = wrapper.find('.Notifications p');
        expect(wrapper.find('.Notifications p')).toHaveLength(1);
        expect(p.text()).toEqual('Here is the list of notifications');
    });

    it('Tests that the first NotificationItem element renders the right HTML', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const p = wrapper.find('.Notifications NotificationItem:first-child');
        expect(p.html()).toEqual('<li data-notification-type="default">New course available</li>');
    });
});

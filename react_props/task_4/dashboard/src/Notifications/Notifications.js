import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import './NotificationItem.css';
import PropTypes from "prop-types";
import notificationItemShape from "./NotificationItemShape";


const Notification = ({ displayDrawer, listNotifications }) => {
    return (
        <div className="notification-wrapper">
            <div className="menuItem">Your notifications</div>
            {displayDrawer && (
            <div className="Notifications">
                <button className="btn-notification" aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                    <img src={closeIcon} alt="close-icon" />
                </button>
                <div className="Notifications-header">
                    {listNotifications.length === 0 ? (
                        <p>No notifications for now</p>
                    ) : (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {listNotifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                </div>

            </div>
            )}
        </div>
);
}

Notification.defaultProps = {
    displayDrawer: true,
    listNotifications: []
};

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(notificationItemShape)
}
export default Notification;

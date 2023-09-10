import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import './NotificationItem.css';
import PropTypes from "prop-types";


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
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 && (
                            <li>
                                <p>No notification available yet</p>
                            </li>
                        )}
                        {listNotifications.map(notification => (
                            <NotificationItem id={notification.id} html={notification.html} type={notification.type} value={notification.value} />
                        ))}
                    </ul>
                </div>

            </div>
            )}
        </div>
);
}

Notification.defaultProps = {
    displayDrawer: false,
};

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
}
export default Notification;

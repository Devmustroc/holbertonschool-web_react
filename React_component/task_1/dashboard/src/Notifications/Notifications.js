import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import './NotificationItem.css';
import PropTypes from "prop-types";


const Notification = ({ displayDrawer }) => {
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
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            </div>
            )}
        </div>
);
}

Notification.defaultProps = {
    displayDrawer: true,
};

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
}
export default Notification;

import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";


const Notification = () => {
    return (
        <div className="Notifications">
            <div className="Notifications-header">
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                </ul>
            </div>
            <button aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                <img src={closeIcon} alt="close-icon" />
            </button>


        </div>

);
}

export default Notification;

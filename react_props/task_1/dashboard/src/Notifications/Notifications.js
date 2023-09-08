import React from "react";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import "./Notifications.css";

const Notification = () => {
    return (
        <div className="Notifications">
            <div className="Btn-notification">
                <p>Here is the list of notifications</p>
                <button aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
                    <img src={closeIcon} />
                </button>
            </div>
            <ul>
                <li data-priority='default' >New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}} ></li>
            </ul>
        </div>
    );
}

export default Notification;

import React from 'react';
import prototype from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
    if ((type && value) && (typeof type === 'string' && typeof value === 'string') && (!html)) return(<li data-notification-type={type}>{value}</li>)
    if ((!type) && (html) && (html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={html}></li>)
    if ((type) && (html) && (html.__html)) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
    return(<li data-notification-type="default">NotificationItem: invalid props</li>)
};

NotificationItem.defaultProps = {
    type: prototype.string,
    value: prototype.string,
    html: prototype.shape({ __html: prototype.string })
};

export default NotificationItem;

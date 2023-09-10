import prototype from "prop-types";

const NotificationItemShape = prototype.shape({
    id: prototype.number.isRequired,
    html: prototype.objectOf(prototype.string),
    type: prototype.string.isRequired,
    value: prototype.string
});

export default NotificationItemShape;

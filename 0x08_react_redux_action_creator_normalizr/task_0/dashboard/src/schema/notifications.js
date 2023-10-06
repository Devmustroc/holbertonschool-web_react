import * as notificationData from "../../dist/notifications";

const getAllNotificationsByUser = (userId) => {
	return notificationData.default.filter((notification) => notification.author.id === userId);
};

export default getAllNotificationsByUser;

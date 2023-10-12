const data = require('../notifications.json');

const getAllNotificationsByUser = (userId) => {
    const result = [];
    data.forEach((item) => {
        if (item.author.id === userId) {
            result.push(item.context);
        }
    });
    return result;
};

export default getAllNotificationsByUser;

const data = require('../notifications.json');
import {schema} from "normalizr";

const getAllNotificationsByUser = (userId) => {
    const result = [];
    data.forEach((item) => {
        if (item.author.id === userId) {
            result.push(item.context);
        }
    });
    return result;
};

const user = new schema.Entity("users");

const message =  new schema.Entity("messages", {}, {
    idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message
});

export default getAllNotificationsByUser;

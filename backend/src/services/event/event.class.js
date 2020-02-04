const { Service } = require('feathers-nedb');

exports.Event = class Event extends Service {
  create(data, params) {
    
    const eventData = {
      ...data,
      createdAt: new Date().getTime(),
    };

    return super.create(eventData, params);
  }
};

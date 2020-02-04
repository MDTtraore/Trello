const { Service } = require('feathers-nedb');
var uuid = require('uuid-random');

exports.State = class State extends Service {
  create(data, params) {

    // making the id of the state
    const ref = uuid();

    const stateData = {
      ...data,
      createdAt: new Date().getTime(),
      ref, 
    };

    return super.create(stateData, params);
  }
};

const users = require('./users/users.service.js');
const state = require('./state/state.service.js');
const card = require('./card/card.service.js');
const project = require('./project/project.service.js');
const event = require('./event/event.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(state);
  app.configure(card);
  app.configure(project);
  app.configure(event);
};

// Initializes the `Event` service on path `/event`
const { Event } = require('./event.class');
const createModel = require('../../models/event.model');
const hooks = require('./event.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/event', new Event(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('event');

  service.hooks(hooks);
};

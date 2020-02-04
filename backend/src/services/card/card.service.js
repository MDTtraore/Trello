// Initializes the `Card` service on path `/card`
const { Card } = require('./card.class');
const createModel = require('../../models/card.model');
const hooks = require('./card.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/card', new Card(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('card');

  service.hooks(hooks);
};

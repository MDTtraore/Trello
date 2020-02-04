const { authenticate } = require('@feathersjs/authentication').hooks;

const { setField } = require('feathers-authentication-hooks');

const setUserId = setField({
  from: 'params.user._id',
  as: 'data.createdBy'
});

const restrictToOwner = setField({
  from: 'params.user._id',
  as: 'params.query.createdBy'
});

module.exports = {
  before: {
    all: [ authenticate('jwt'), setUserId, restrictToOwner ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

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

const privacy = require('../../hooks/privacy');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [privacy()],
    get: [],
    create: [setUserId],
    update: [restrictToOwner],
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

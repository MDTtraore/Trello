const assert = require('assert');
const app = require('../../src/app');

describe('\'Card\' service', () => {
  it('registered the service', () => {
    const service = app.service('card');

    assert.ok(service, 'Registered the service');
  });
});

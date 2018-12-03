const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  it('fuckyou at the ass', () => {
    var action = {
      type: 'SET_LOCATION',
      location: {}
    };
    var res = actions.setLocation(action.location);

    expect(res).toEqual(action);
  });
});

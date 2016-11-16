import expect from 'expect';
import corporatePartnershipsMainDashContainerReducer from '../reducer';

describe('corporatePartnershipsMainDashContainerReducer', () => {
  it('returns the initial state', () => {
    expect(corporatePartnershipsMainDashContainerReducer(undefined, {})).toEqual({});
  });
});

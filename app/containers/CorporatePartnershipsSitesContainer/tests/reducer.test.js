import expect from 'expect';
import corporatePartnershipsContainerReducer from '../reducer';

describe('corporatePartnershipsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(corporatePartnershipsContainerReducer(undefined, {})).toEqual({});
  });
});

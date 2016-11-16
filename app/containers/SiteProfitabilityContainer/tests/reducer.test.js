import expect from 'expect';
import siteProfitabilityContainerReducer from '../reducer';

describe('siteProfitabilityContainerReducer', () => {
  it('returns the initial state', () => {
    expect(siteProfitabilityContainerReducer(undefined, {})).toEqual({});
  });
});

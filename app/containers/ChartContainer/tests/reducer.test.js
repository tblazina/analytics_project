import expect from 'expect';
import barChartReducer from '../reducer';

describe('barChartReducer', () => {
  it('returns the initial state', () => {
    expect(barChartReducer(undefined, {})).toEqual({});
  });
});

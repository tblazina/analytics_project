import expect from 'expect';
import responsiveChartAreaReducer from '../reducer';

describe('responsiveChartAreaReducer', () => {
  it('returns the initial state', () => {
    expect(responsiveChartAreaReducer(undefined, {})).toEqual({});
  });
});

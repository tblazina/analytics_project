import { createSelector } from 'reselect';

/**
 * Direct selector to the chartContainer state domain
 */
const selectChartContainerDomain = () => (state) => state.chartContainer;

/**
 * Other specific selectors
 */




/**
 * Default selector used by BarChart
 */

const selectChartContainer = () => createSelector(
  selectChartContainerDomain(),
  (substate) => substate
);



export default selectChartContainer;
export {
  selectChartContainerDomain,

};

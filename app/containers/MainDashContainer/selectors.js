import { createSelector } from 'reselect';

/**
 * Direct selector to the chartContainer state domain
 */
const selectMainDashContainerDomain = () => (state) => state.mainDashContainer;

/**
 * Other specific selectors
 */




/**
 * Default selector used by BarChart
 */

const selectMainDashContainer = () => createSelector(
  selectMainDashContainerDomain(),
  (substate) => substate
);



export default selectMainDashContainer;
export {
  selectMainDashContainerDomain,

};

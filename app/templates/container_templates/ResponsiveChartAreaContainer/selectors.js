import { createSelector } from 'reselect';

/**
 * Direct selector to the responsiveChartArea state domain
 */
const selectResponsiveChartAreaDomain = () => (state) => state.responsiveChartArea;

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResponsiveChartArea
 */

const selectResponsiveChartArea = () => createSelector(
  selectResponsiveChartAreaDomain(),
  (substate) => substate
);

export default selectResponsiveChartArea;
export {
  selectResponsiveChartAreaDomain,
};

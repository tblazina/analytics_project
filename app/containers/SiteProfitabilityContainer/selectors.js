import { createSelector } from 'reselect';

/**
 * Direct selector to the siteProfitabilityContainer state domain
 */
const selectSiteProfitabilityContainerDomain = () => (state) => state.siteProfitabilityContainer;

/**
 * Other specific selectors
 */


/**
 * Default selector used by SiteProfitabilityContainer
 */

const selectSiteProfitabilityContainer = () => createSelector(
  selectSiteProfitabilityContainerDomain(),
  (substate) => substate
);

export default selectSiteProfitabilityContainer;
export {
  selectSiteProfitabilityContainerDomain,
};

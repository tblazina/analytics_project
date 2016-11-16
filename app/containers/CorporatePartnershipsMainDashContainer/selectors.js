import { createSelector } from 'reselect';

/**
 * Direct selector to the corporatePartnershipsMainDashContainer state domain
 */
const selectCorporatePartnershipsMainDashContainerDomain = () => (state) => state.corporatePartnershipsMainDashContainer;

/**
 * Other specific selectors
 */


/**
 * Default selector used by CorporatePartnershipsMainDashContainer
 */

const selectCorporatePartnershipsMainDashContainer = () => createSelector(
  selectCorporatePartnershipsMainDashContainerDomain(),
  (substate) => substate
);

export default selectCorporatePartnershipsMainDashContainer;
export {
  selectCorporatePartnershipsMainDashContainerDomain,
};

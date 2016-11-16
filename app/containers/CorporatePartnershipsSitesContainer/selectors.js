import { createSelector } from 'reselect';

/**
 * Direct selector to the corporatePartnershipsContainer state domain
 */
const selectCorporatePartnershipsSitesContainerDomain = () => (state) => state.corporatePartnershipsSitesContainer;

/**
 * Other specific selectors
 */


/**
 * Default selector used by CorporatePartnershipsContainer
 */

const selectCorporatePartnershipsSitesContainer = () => createSelector(
  selectCorporatePartnershipsSitesContainerDomain(),
  (substate) => substate
);

export default selectCorporatePartnershipsSitesContainer;
export {
  selectCorporatePartnershipsSitesContainerDomain,
};

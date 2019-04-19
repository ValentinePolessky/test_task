import { createSelector } from 'reselect';

const getContracts = state => state.contracts;

const contractsSelector = id =>
  createSelector(getContracts, contracts => contracts.filter(contract => contract.customerId === id));

export default {
    contractsSelector
}



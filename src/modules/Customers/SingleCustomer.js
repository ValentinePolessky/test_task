import React from 'react';
import { connect } from "react-redux";
import selectors from "../../redux/selectors";
import { removeCustomerAction } from "../../redux/actions";

const onDelete = (id, handler) => (e) => {
    e.preventDefault();
    handler(id);
};

const SingleCustomer = ({contracts, customer, removeCustomer}) => (
  <div className="customer">
      <span className="customer-name-holder">{customer.name}</span>
      <button onClick={onDelete(customer.id, removeCustomer)} className="delete-btn">
          Delete
      </button>
      {contracts.map(contract => (
        <div className="customer-contract" key={contract.id}>
            Contract #{contract.id}
        </div>
      ))}
  </div>
);

export default connect((state, props) => ({
    contracts: selectors.contractsSelector(props.customer.id)(state)
}), (dispatch) => ({
    removeCustomer: (customerId) => dispatch(removeCustomerAction(customerId))
}))(SingleCustomer)

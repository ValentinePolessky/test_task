import React from 'react';
import { connect } from "react-redux";
import SingleCustomer from "./SingleCustomer";

const Customers = ({customers}) => {
    return (
      <div className="block-holder">
          <h2>
              Customers
          </h2>
          <div className="overflow-holder">
              {
                  customers.map(customer => <SingleCustomer key={customer.id} customer={customer}/>)
              }
          </div>
      </div>
    );
};

export default connect((state) => ({
    customers: state.customers
}))(Customers);

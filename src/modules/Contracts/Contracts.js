import React from 'react';
import { connect } from "react-redux";

const Contracts = ({contracts}) => {
    return (
      <div className="block-holder">
          <h2>
              Contracts
          </h2>
          <div className="overflow-holder">
              {
                  contracts.map(contract => (
                    <div key={contract.id} className="contract">
                        <span className="contract-heading-holder">Contract #{contract.id}</span>
                        <span className="contract-name-holder">{contract.name}</span>
                    </div>
                  ))
              }
          </div>
      </div>
    );
};

export default connect((state) => ({
    contracts: state.contracts
}))(Contracts);

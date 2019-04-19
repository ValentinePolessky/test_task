import { createStore } from 'redux';

function store(state = {}, action) {
    switch (action.type) {
        case 'REMOVE_CUSTOMER':
            return {
                customers: state.customers.filter(customer => customer.id !== action.customerId),
                contracts: state.contracts.filter(contract => contract.customerId !== action.customerId),
            };
        default:
            return state
    }
}

export default createStore(store,
  {
      contracts: [
          ...Array.apply(null, {length: 26}).map((cur, i) => ({
              id: i,
              name: 'lorem ipsum',
              customerId: i % 2
          }))
      ],
      customers: [
          {
              id: 0,
              name: "Lawyers Ltd."
          },
          {
              id: 1,
              name: "Legal Co."
          }
      ]
  });

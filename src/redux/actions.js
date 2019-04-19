export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const removeCustomerAction = (customerId) => ({
    type: REMOVE_CUSTOMER,
    customerId
});

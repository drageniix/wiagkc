export const setModal = modal => ({
    type: 'SET_MODAL',
    modal
});
export const setDonation = donation => ({
    type: 'SET_DONATION',
    donation
});

export const setQuantity = (quantity, index) => ({
    type: 'SET_QUANTITY',
    quantity,
    index
});

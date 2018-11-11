export const getSpecialEventTotal = (tickets, donation) =>
    `$${tickets.reduce(
        (prev, current) => prev + current.quantity * current.price,
        donation
    )}.00`;

export const getSpecialEventPaypal = (tickets, donation) =>
    tickets
        .concat({
            title: 'Donation - 2018',
            price: donation,
            quantity: donation > 0 ? 1 : 0,
            index: tickets.length + 1
        })
        .filter(ticket => ticket.quantity > 0);

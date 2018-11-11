export default async function getReducer() {
    const data = await fetch('/assets/data/index.json').then(res => res.json());
    data.imagePath = window.location.pathname.slice(
        0,
        window.location.pathname.lastIndexOf('/')
    );
    data.icons = data.icons || { unknown: '' };

    data.payment = {
        donation: 0,
        tickets: data.specialEvent.tickets.map((ticket, index) => ({
            ...ticket,
            quantity: 0,
            index: index + 1
        }))
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'SET_MODAL':
                newState.modal = action.modal;
                break;
            case 'SET_QUANTITY':
                newState.payment.tickets = [...newState.payment.tickets];
                newState.payment.tickets[action.index].quantity = parseInt(
                    action.quantity
                );
                break;
            case 'SET_DONATION':
                newState.payment.donation = parseInt(action.donation);
                break;
            default:
                break;
        }
        return newState;
    };
}

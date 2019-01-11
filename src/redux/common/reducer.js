export default async function getReducer() {
    const data = await fetch('/assets/data/index.json').then(res => res.json());
    data.events = [];

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'SET_MODAL':
                newState.modal = action.modal;
                break;
            case 'EVENTS':
                newState.events = action.events;
                break;
            case 'SET_EVENT':
                newState.event = action.event;
                break;
            default:
                break;
        }
        return newState;
    };
}

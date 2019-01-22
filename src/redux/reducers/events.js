export default async function getReducer() {
    const data = {
        events: []
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'LOGOUT':
                newState.event = null;
                break;
            case 'GET_EVENTS':
                newState.events = action.events;
                break;
            case 'CREATE_EVENT':
                newState.events = newState.events.concat(action.event);
                break;
            case 'UPDATE_EVENT':
                newState.events = newState.events.map(event =>
                    event._id === action.event._id ? action.event : event
                );
                break;
            case 'DELETE_EVENT':
                newState.events = newState.events.filter(
                    event => event._id !== action.eventId
                );
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

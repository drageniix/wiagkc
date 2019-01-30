import {
    LOGOUT,
    GET_EVENTS,
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    SET_EVENT
} from '../constants';

export default async function getReducer() {
    const data = {
        events: []
    };

    return (state = data, action) => {
        switch (action.type) {
            case LOGOUT:
                return { ...state, event: null };
            case GET_EVENTS:
                return { ...state, events: action.events };
            case CREATE_EVENT:
                return { ...state, events: state.events.concat(action.event) };
            case UPDATE_EVENT:
                return {
                    ...state,
                    events: state.events.map(event =>
                        event._id === action.event._id ? action.event : event
                    )
                };
            case DELETE_EVENT:
                return {
                    ...state,
                    events: state.events.filter(
                        event => event._id !== action.eventId
                    )
                };
            case SET_EVENT:
                return { ...state, event: action.event };
            default:
                return state;
        }
    };
}

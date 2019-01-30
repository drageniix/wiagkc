import { LOGOUT, GET_ALL_USERS } from '../constants';

export default async function getReducer() {
    const data = {
        users: []
    };

    return (state = data, action) => {
        switch (action.type) {
            case LOGOUT:
                return { ...state, users: [] };
            case GET_ALL_USERS:
                return { ...state, users: action.users };
            default:
                return state;
        }
    };
}

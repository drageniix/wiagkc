import { LOGOUT, SET_MODAL, SET_LOADING } from '../constants';

export default async function getReducer() {
    const data = await fetch('/assets/data/index.json').then(res => res.json());

    return (state = data, action) => {
        const newState = { ...state, errors: action.errors };
        switch (action.type) {
            case LOGOUT:
                newState.errors = null;
                break;
            case SET_MODAL:
                newState.modal = action.modal;
                break;
            case SET_LOADING:
                newState.loading = action.loading;
                break;
            default:
                break;
        }
        return newState;
    };
}

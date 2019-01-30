import { LOAD_HOME } from '../constants';

export default async function getReducer() {
    const data = { loaded: false };
    return (state = data, { type, payload }) => {
        switch (type) {
            case LOAD_HOME:
                return { loaded: payload.loaded, ...payload.home };
            default:
                return state;
        }
    };
}

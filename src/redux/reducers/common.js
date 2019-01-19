export default async function getReducer() {
    const data = await fetch('/assets/data/index.json').then(res => res.json());

    return (state = data, action) => {
        const newState = { ...state, errors: action.errors };
        switch (action.type) {
            case 'SET_MODAL':
                newState.modal = action.modal;
                break;
            default:
                break;
        }
        return newState;
    };
}

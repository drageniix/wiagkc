export default async function getReducer() {
    const data = {
        users: []
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'GET_ALL_USERS':
                newState.users = action.users;
                break;
            default:
                break;
        }
        return newState;
    };
}

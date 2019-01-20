export default async function getReducer() {
    const token = localStorage.getItem('token');
    const expiryDate = new Date(localStorage.getItem('expiryDate'));
    const userId = localStorage.getItem('userId');
    const user = localStorage.getItem('user');
    const previousSession = expiryDate > new Date();

    const data = {
        token: previousSession && token,
        user: previousSession && user && JSON.parse(user),
        userId: (previousSession && userId) || '',
        remainingMilliseconds:
            previousSession && expiryDate && expiryDate.getTime() - Date.now()
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'GET_USER_FLAG':
                newState.user = { ...newState.user, flag: action.flag };
                break;
            case 'UPDATE_USER':
                localStorage.setItem('user', JSON.stringify(action.user));
                newState.user = action.user;
                break;
            case 'LOGIN':
                localStorage.setItem('token', action.token);
                localStorage.setItem('expiryDate', action.expiryDate);
                localStorage.setItem('userId', action.userId);
                localStorage.setItem('user', JSON.stringify(action.user));
                newState.token = action.token;
                newState.userId = action.userId;
                newState.user = action.user;
                break;
            case 'LOGOUT':
                localStorage.removeItem('token');
                localStorage.removeItem('expiryDate');
                localStorage.removeItem('userId');
                localStorage.removeItem('user');
                newState.token = null;
                newState.userId = null;
                newState.user = null;
                break;
            default:
                break;
        }
        return newState;
    };
}

import { UPDATE_USER, LOGIN, LOGOUT } from '../constants';

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
        switch (action.type) {
            case UPDATE_USER:
                localStorage.setItem('user', JSON.stringify(action.user));
                return { ...state, user: action.user };
            case LOGIN:
                localStorage.setItem('token', action.token);
                localStorage.setItem('expiryDate', action.expiryDate);
                localStorage.setItem('userId', action.userId);
                localStorage.setItem('user', JSON.stringify(action.user));
                return {
                    ...state,
                    token: action.token,
                    userId: action.userId,
                    user: action.user
                };
            case LOGOUT:
                localStorage.removeItem('token');
                localStorage.removeItem('expiryDate');
                localStorage.removeItem('userId');
                localStorage.removeItem('user');
                return { ...state, token: null, userId: null, user: null };
            default:
                return state;
        }
    };
}

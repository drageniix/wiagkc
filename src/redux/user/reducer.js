//TODO: autologout

export default async function getReducer() {
    const token = localStorage.getItem('token');
    const expiryDate = new Date(localStorage.getItem('expiryDate'));
    const userId = localStorage.getItem('userId');
    const privilege = parseInt(localStorage.getItem('privilege'));
    const previousSession = expiryDate > new Date();

    const data = {
        token: previousSession && token,
        userId: (previousSession && userId) || '',
        privilege: (previousSession && privilege) || 0,
        remainingMilliseconds:
            previousSession &&
            expiryDate &&
            expiryDate.getTime() - new Date().getTime()
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'LOGIN':
                localStorage.setItem('token', action.token);
                localStorage.setItem('expiryDate', action.expiryDate);
                localStorage.setItem('userId', action.userId);
                localStorage.setItem('privilege', action.privilege);
                newState.token = action.token;
                newState.userId = action.userId;
                newState.privilege = action.privilege;
                break;
            case 'LOGOUT':
                localStorage.removeItem('token');
                localStorage.removeItem('expiryDate');
                localStorage.removeItem('userId');
                localStorage.removeItem('privilege');
                newState.token = null;
                newState.userId = null;
                newState.privilege = null;
                break;
            default:
                break;
        }
        return newState;
    };
}

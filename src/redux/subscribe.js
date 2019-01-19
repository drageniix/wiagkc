import { logout } from './actions/user';

export default store => {
    const autoLog = store.getState().user.remainingMilliseconds;
    if (autoLog) {
        setTimeout(() => {
            store.dispatch(logout);
        }, autoLog);
    }
};

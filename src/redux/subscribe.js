import openSocket from 'socket.io-client';
import { logout } from './user/actions';

export default store => {
    const io = openSocket('https://wiakc.herokuapp.com');
    io.on('events', data => {
        if (data.action === 'create') {
            store.dispatch({ type: 'EVENT', events: data.events });
        } else if (data.action === 'update') {
            store.dispatch({ type: 'EVENT', events: data.events });
        } else if (data.action === 'delete') {
            store.dispatch({ type: 'EVENT', events: data.events });
        }
    });

    const autoLog = store.getState().user.remainingMilliseconds;
    if (autoLog) {
        setTimeout(() => {
            store.dispatch(logout);
        }, autoLog);
    }
};

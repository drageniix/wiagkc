import { logout } from './actions/user';
import openSocket from 'socket.io-client';
import {
    UPDATE_EVENT,
    DELETE_EVENT,
    CREATE_EVENT,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from './constants';
const io = openSocket('https://wiakc.herokuapp.com');

export default store => {
    io.on('events', data => {
        switch (data.action) {
            case 'create':
                store.dispatch({
                    type: CREATE_EVENT,
                    event: data.event
                });
                break;
            case 'update':
                store.dispatch({
                    type: UPDATE_EVENT,
                    event: data.event
                });
                break;
            case 'delete':
                store.dispatch({
                    type: DELETE_EVENT,
                    eventId: data.eventId
                });
                break;
            default:
                break;
        }
    });

    io.on('posts', data => {
        switch (data.action) {
            case 'create':
                store.dispatch({ type: CREATE_POST, post: data.post });
                break;
            case 'update':
                store.dispatch({ type: UPDATE_POST, post: data.post });
                break;
            case 'delete':
                store.dispatch({ type: DELETE_POST, postId: data.postId });
                break;
            default:
                break;
        }
    });

    io.on('comments', data => {
        switch (data.action) {
            case 'create':
                store.dispatch({
                    type: CREATE_COMMENT,
                    comment: data.comment
                });
                break;
            case 'update':
                store.dispatch({
                    type: UPDATE_COMMENT,
                    comment: data.comment
                });
                break;
            case 'delete':
                store.dispatch({
                    type: DELETE_COMMENT,
                    commentId: data.commentId,
                    postId: data.postId
                });
                break;
            default:
                break;
        }
    });

    const autoLog = store.getState().user.remainingMilliseconds;
    if (autoLog) {
        setTimeout(() => {
            store.dispatch(logout);
        }, autoLog);
    }
};

import openSocket from 'socket.io-client';
const io = openSocket('https://wiakc.herokuapp.com');
import { setErrors } from './common';

export const setPost = post => ({
    type: 'SET_POST',
    post
});

export const getPosts = () => dispatch => {
    fetch('https://wiakc.herokuapp.com/feed/posts')
        .then(res => res.json())
        .then(json => {
            io.on('posts', data => {
                console.log(data);
                switch (data.action) {
                    case 'create':
                        dispatch({ type: 'CREATE_POST', post: data.post });
                        break;
                    case 'update':
                        dispatch({ type: 'UPDATE_POST', post: data.post });
                        break;
                    case 'delete':
                        dispatch({ type: 'DELETE_POST', post: data.post });
                        break;
                    default:
                        break;
                }
            });

            dispatch({
                type: 'GET_POSTS',
                posts: json.posts
            });
        })
        .catch(err => dispatch(setErrors(err)));
};

export const addPost = data => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch('https://wiakc.herokuapp.com/feed/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getState().user.token
        },
        body
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 201) {
                dispatch(setErrors(json));
            } else {
                dispatch(setPost(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const updatePost = data => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch('https://wiakc.herokuapp.com/feed/post/' + getState().feed.post._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getState().user.token
        },
        body
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200) {
                dispatch(setErrors(json));
            } else {
                dispatch(setPost(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const deletePost = () => (dispatch, getState) =>
    fetch('https://wiakc.herokuapp.com/feed/post/' + getState().feed.post._id, {
        method: 'DELETE',
        headers: {
            Authorization: getState().user.token
        }
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200) {
                dispatch(setErrors(json));
            } else {
                dispatch(setPost(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));

import { setErrors } from './common';
import { setEditing } from './feed';

export const addComment = data => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch(
        'https://wiakc.herokuapp.com/feed/post/' +
            getState().feed.post._id +
            '/comments',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getState().user.token
            },
            body
        }
    )
        .then(async res => {
            const json = await res.json();
            if (res.status !== 201) {
                dispatch(setErrors(json));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const updateComment = (commentId, data) => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch(
        'https://wiakc.herokuapp.com/feed/post/' +
            getState().feed.post._id +
            '/comments/' +
            commentId,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getState().user.token
            },
            body
        }
    )
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200) {
                dispatch(setErrors(json));
            } else {
                dispatch(setEditing(''));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const deleteComment = commentId => (dispatch, getState) =>
    fetch(
        'https://wiakc.herokuapp.com/feed/post/' +
            getState().feed.post._id +
            '/comments/' +
            commentId,
        {
            method: 'DELETE',
            headers: {
                Authorization: getState().user.token
            }
        }
    )
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200) {
                dispatch(setErrors(json));
            }
        })
        .catch(err => dispatch(setErrors(err)));

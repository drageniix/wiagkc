import { setErrors, setLoading } from './common';
import {
    GET_POSTS,
    SET_POST,
    SET_EDITING,
    SET_POSTS_QUERY,
    SET_POSTS_PAGE
} from '../constants';

export const setPost = post => ({
    type: SET_POST,
    post
});

export const setEditing = editing => ({
    type: SET_EDITING,
    editing
});

export const setQuery = query => dispatch => {
    dispatch({
        type: SET_POSTS_QUERY,
        query
    });
    dispatch(setPage(1));
};

export const setPage = page => dispatch => {
    dispatch({
        type: SET_POSTS_PAGE,
        page
    });
    dispatch(getPosts());
};

export const getPost = postId => dispatch => {
    dispatch(setPost(undefined));
    dispatch(setLoading(true));
    fetch('https://wiakc.herokuapp.com/feed/post/' + postId)
        .then(res => res.json())
        .then(json => {
            dispatch(setLoading(false));
            dispatch(setPost(json.post));
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setErrors(err));
        });
};

export const getPosts = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    fetch(
        `https://wiakc.herokuapp.com/feed/posts?page=${
            getState().feed.page
        }&q=${getState().feed.query}`
    )
        .then(res => res.json())
        .then(json => {
            dispatch(setLoading(false));
            dispatch({
                type: GET_POSTS,
                posts: json.posts,
                totalItems: json.totalItems,
                itemsPerPage: json.itemsPerPage
            });
        })
        .catch(err => {
            dispatch(setLoading(false));
            dispatch(setErrors(err));
        });
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
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const updatePost = (postId, data) => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch('https://wiakc.herokuapp.com/feed/post/' + postId, {
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
                dispatch(setEditing(''));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const deletePost = postId => (dispatch, getState) =>
    fetch('https://wiakc.herokuapp.com/feed/post/' + postId, {
        method: 'DELETE',
        headers: {
            Authorization: getState().user.token
        }
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200) {
                dispatch(setErrors(json));
            }
        })
        .catch(err => dispatch(setErrors(err)));

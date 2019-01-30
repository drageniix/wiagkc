import { setErrors } from './common';
import { LOGIN, UPDATE_USER, LOGOUT } from '../constants';
import { closeModal, openLoginModal } from './modals';

export const logout = () => dispatch => {
    dispatch(closeModal());
    dispatch({
        type: LOGOUT
    });
};

export const confirmAccount = (privilege, token) => (dispatch, getState) =>
    fetch('https://wiakc.herokuapp.com/auth/privilege', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            privilege,
            token
        })
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200 && res.status !== 201) {
                dispatch(setErrors(json));
            } else if (getState().user.user) {
                dispatch({
                    type: UPDATE_USER,
                    ...json
                });
            }
        })
        .catch(err => dispatch(setErrors(err)));

export const updateUser = body => (dispatch, getState) =>
    fetch('https://wiakc.herokuapp.com/auth/update', {
        method: 'PUT',
        headers: {
            Authorization: getState().user.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200 && res.status !== 201) {
                dispatch(setErrors(json));
            } else {
                dispatch({
                    type: UPDATE_USER,
                    ...json
                });

                dispatch(closeModal());
            }
        })
        .catch(err => dispatch(setErrors(err)));

const standardLogin = async (url, input, dispatch) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200 && res.status !== 201) {
                dispatch(setErrors(json));
            } else {
                const expiryDate = new Date(Date.now() + 3600000);

                dispatch({
                    type: LOGIN,
                    expiryDate: expiryDate.toISOString(),
                    ...json
                });

                dispatch(closeModal());

                setTimeout(() => {
                    dispatch(logout);
                    dispatch(openLoginModal());
                }, 3600000);
            }
        })
        .catch(err => dispatch(setErrors(err)));

export const signup = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/signup', input, dispatch);

export const login = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/login', input, dispatch);

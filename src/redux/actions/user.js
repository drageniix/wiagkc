import { setErrors, setModal } from './common';

export const getFlag = countryCode => dispatch =>
    fetch('https://restcountries.eu/rest/v2/name/' + countryCode)
        .then(res => res.json())
        .then(json =>
            dispatch({
                type: 'GET_USER_FLAG',
                flag: json[0].flag
            })
        );

export const logout = () => dispatch => {
    dispatch(setModal(0));
    dispatch({
        type: 'LOGOUT'
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
                    type: 'UPDATE_USER',
                    ...json
                });
            }
        })
        .catch(err => dispatch(setErrors(err)));

export const updateUser = data => (dispatch, getState) =>
    fetch('https://wiakc.herokuapp.com/auth/update', {
        method: 'POST',
        headers: {
            Authorization: getState().user.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            const json = await res.json();
            if (res.status !== 200 && res.status !== 201) {
                dispatch(setErrors(json));
            } else {
                dispatch({
                    type: 'UPDATE_USER',
                    ...json
                });

                dispatch(setModal(0));
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
                    type: 'LOGIN',
                    expiryDate: expiryDate.toISOString(),
                    ...json
                });

                dispatch(setModal(0));

                setTimeout(() => {
                    dispatch(logout);
                    dispatch(setModal(3));
                }, 3600000);
            }
        })
        .catch(err => dispatch(setErrors(err)));

export const signup = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/signup', input, dispatch);

export const login = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/login', input, dispatch);

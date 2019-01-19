import { setErrors, setModal } from './common';

export const logout = () => dispatch => {
    dispatch(setModal(0));
    dispatch({
        type: 'LOGOUT'
    });
};

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

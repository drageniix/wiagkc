import { setLoading, setErrors } from './common';

export const getAllUsers = () => (dispatch, getState) => {
    dispatch(setLoading(true));
    fetch('https://wiakc.herokuapp.com/auth/users', {
        headers: {
            Authorization: getState().user.token,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            if (json.users) {
                dispatch({
                    type: 'GET_ALL_USERS',
                    users: json.users
                });
            }
            dispatch(setLoading(false));
        })
        .catch(err => {
            dispatch(setErrors(err));
            dispatch(setLoading(false));
        });
};

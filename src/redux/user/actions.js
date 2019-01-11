import { setModal } from '../common/actions';

export const logout = () => dispatch => {
    dispatch(setModal(0));
    dispatch({
        type: 'LOGOUT'
    });
};

const standardLogin = async (url, input, dispatch) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });

        if (res.status !== 200 && res.status !== 201) {
            throw new Error(res.message || res.data);
        } else {
            const expiryDate = new Date(new Date().getTime() + 3600000);
            dispatch({
                type: 'LOGIN',
                expiryDate: expiryDate.toISOString(),
                ...(await res.json())
            });
            dispatch(setModal(0));
            setTimeout(() => {
                dispatch(logout);
            }, expiryDate.getTime() - new Date().getTime());
        }
    } catch (err) {
        console.log(err);
    }
};

export const signup = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/signup', input, dispatch);

export const login = input => dispatch =>
    standardLogin('https://wiakc.herokuapp.com/auth/login', input, dispatch);

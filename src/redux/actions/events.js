import openSocket from 'socket.io-client';
import { setErrors, setModal } from './common';
const io = openSocket('https://wiakc.herokuapp.com');

export const setEvent = event => ({
    type: 'SET_EVENT',
    event
});

export const getEvents = () => dispatch => {
    fetch('https://wiakc.herokuapp.com/calendar')
        .then(res => res.json())
        .then(json => {
            io.on('events', data => {
                switch (data.action) {
                    case 'create':
                        dispatch({ type: 'CREATE_EVENT', event: data.event });
                        break;
                    case 'update':
                        dispatch({ type: 'UPDATE_EVENT', event: data.event });
                        break;
                    case 'delete':
                        dispatch({ type: 'DELETE_EVENT', event: data.event });
                        break;
                    default:
                        break;
                }
            });

            dispatch({
                type: 'GET_EVENTS',
                events: json.events
            });
        })
        .catch(err => dispatch(setErrors(err)));
};

export const addEvent = data => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch('https://wiakc.herokuapp.com/calendar', {
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
                dispatch(setModal(0));
                dispatch(setEvent(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const updateEvent = data => (dispatch, getState) => {
    const body = JSON.stringify(data);
    fetch(
        'https://wiakc.herokuapp.com/calendar/' + getState().events.event._id,
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
                dispatch(setModal(0));
                dispatch(setEvent(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));
};

export const deleteEvent = () => (dispatch, getState) =>
    fetch(
        'https://wiakc.herokuapp.com/calendar/' + getState().events.event._id,
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
            } else {
                dispatch(setModal(0));
                dispatch(setEvent(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));

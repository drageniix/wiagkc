import { setErrors, setLoading } from './common';
import { SET_EVENT, GET_EVENTS } from '../constants';
import { closeModal } from './modals';

export const setEvent = event => ({
    type: SET_EVENT,
    event
});

export const getEvents = () => dispatch => {
    dispatch(setLoading(true));
    fetch('https://wiakc.herokuapp.com/calendar')
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: GET_EVENTS,
                events: json.events
            });
            dispatch(setLoading(false));
        })
        .catch(err => {
            dispatch(setErrors(err));
            dispatch(setLoading(false));
        });
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
                dispatch(closeModal());
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
                dispatch(closeModal());
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
                dispatch(closeModal());
                dispatch(setEvent(null));
            }
        })
        .catch(err => dispatch(setErrors(err)));

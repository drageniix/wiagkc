export const setModal = modal => ({
    type: 'SET_MODAL',
    modal
});

export const setEvent = event => ({
    type: 'SET_EVENT',
    event
});

export const getEvents = () => dispatch =>
    fetch('https://wiakc.herokuapp.com/calendar/events')
        .then(res => res.json())
        .then(json =>
            dispatch({
                type: 'EVENTS',
                events: json.events
            })
        );

export const addEvent = data => async (dispatch, getState) => {
    const body = JSON.stringify(data);
    const res = await fetch('https://wiakc.herokuapp.com/calendar/event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getState().user.token
        },
        body
    });

    if (res.status !== 200 && res.status !== 201) {
        throw new Error(res.message || res.data);
    } else {
        dispatch({
            type: 'EVENTS',
            ...(await res.json())
        });
        dispatch(setEvent(null));
    }
};

export const updateEvent = data => async (dispatch, getState) => {
    const body = JSON.stringify(data);
    const res = await fetch(
        'https://wiakc.herokuapp.com/calendar/event/' +
            getState().common.event._id,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getState().user.token
            },
            body
        }
    );

    if (res.status !== 200 && res.status !== 201) {
        throw new Error(res.message || res.data);
    } else {
        dispatch({
            type: 'EVENTS',
            ...(await res.json())
        });
        dispatch(setEvent(null));
    }
};

export const deleteEvent = () => async (dispatch, getState) => {
    const res = await fetch(
        'https://wiakc.herokuapp.com/calendar/event/' +
            getState().common.event._id,
        {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + getState().user.token
            }
        }
    );

    if (res.status !== 200 && res.status !== 201) {
        throw new Error(res.message || res.data);
    } else {
        dispatch({
            type: 'EVENTS',
            ...(await res.json())
        });
        dispatch(setEvent(null));
    }
};

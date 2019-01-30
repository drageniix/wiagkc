import { setErrors } from './common';
import { LOAD_HOME } from '../constants';

export const loadHome = () => dispatch =>
    fetch('/assets/data/home.json')
        .then(res => res.json())
        .then(json =>
            dispatch({
                type: LOAD_HOME,
                payload: { home: json, loaded: true }
            })
        )
        .catch(err => setErrors(err));

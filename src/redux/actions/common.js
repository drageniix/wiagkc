import { SET_ERRORS, SET_MODAL, SET_LOADING } from '../constants';

export const setErrors = errors => ({
    type: SET_ERRORS,
    errors
});

export const setModal = modal => ({
    type: SET_MODAL,
    errors: null,
    modal
});

export const setLoading = loading => ({
    type: SET_LOADING,
    loading
});

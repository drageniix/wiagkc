import { SET_MODAL } from '../constants';

export const closeModal = () => ({
    type: SET_MODAL,
    modal: 0
});
export const openWestIndiesModal = () => ({
    type: SET_MODAL,
    modal: 1
});
export const openEventFormModal = () => ({
    type: SET_MODAL,
    modal: 2
});
export const openLoginModal = () => ({
    type: SET_MODAL,
    modal: 3
});
export const openSignupModal = () => ({
    type: SET_MODAL,
    modal: 4
});
export const openUpdateUserModal = () => ({
    type: SET_MODAL,
    modal: 5
});

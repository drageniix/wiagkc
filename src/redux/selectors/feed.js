import { isAuth } from '../../redux/selectors/users';

export const canEditComment = state => comment =>
    state.user.userId === comment.creator._id || isAuth(state.user, 3);

export const isEditingComment = state => comment =>
    (state.user.userId === comment.creator._id || isAuth(state.user, 3)) &&
    state.feed.editing === comment._id;

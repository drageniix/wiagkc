import {
    LOGOUT,
    SET_POSTS_QUERY,
    SET_POSTS_PAGE,
    SET_EDITING,
    GET_POSTS,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    SET_POST,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../constants';

export default async function getReducer() {
    const data = {
        page: 0,
        query: '',
        posts: []
    };

    return (state = data, action) => {
        switch (action.type) {
            case LOGOUT:
                return { ...state, post: null, editing: null };
            case SET_POSTS_QUERY:
                return { ...state, query: action.query };
            case SET_POSTS_PAGE:
                return { ...state, page: action.page };
            case SET_EDITING:
                return { ...state, editing: action.editing };
            case GET_POSTS:
                return {
                    ...state,
                    posts: action.posts,
                    totalItems: action.totalItems,
                    itemsPerPage: action.itemsPerPage
                };
            case CREATE_POST:
                return {
                    ...state,
                    posts: [action.post, ...state.posts.slice(0, 7)]
                };
            case UPDATE_POST:
                return {
                    ...state,
                    posts: state.posts.map(post =>
                        post._id === action.post._id ? action.post : post
                    ),
                    post:
                        (state.post &&
                            state.post._id === action.post._id &&
                            action.post) ||
                        state.post
                };
            case DELETE_POST:
                return {
                    ...state,
                    posts: state.posts.filter(
                        post => post._id !== action.postId
                    ),
                    post:
                        state.post && state.post._id === action.postId
                            ? null
                            : state.post
                };
            case SET_POST:
                return { ...state, post: action.post };
            case CREATE_COMMENT:
                return {
                    ...state,
                    post:
                        (state.post._id === action.comment.postId && {
                            ...state.post,
                            comments: [...state.post.comments, action.comment]
                        }) ||
                        state.post
                };
            case UPDATE_COMMENT:
                return {
                    ...state,
                    post:
                        (state.post._id === action.comment.postId && {
                            ...state.post,
                            comments: state.post.comments.map(comment =>
                                comment._id === action.comment._id
                                    ? action.comment
                                    : comment
                            )
                        }) ||
                        state.post
                };
            case DELETE_COMMENT:
                return {
                    ...state,
                    post:
                        (state.post._id === action.postId && {
                            ...state.post,
                            comments: state.post.comments.filter(
                                comment => comment._id !== action.commentId
                            )
                        }) ||
                        state.post
                };
            default:
                return state;
        }
    };
}

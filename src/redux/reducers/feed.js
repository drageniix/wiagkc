export default async function getReducer() {
    const data = {
        page: 0,
        posts: []
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'LOGOUT':
                newState.post = null;
                newState.editing = null;
                break;
            case 'SET_POSTS_PAGE':
                newState.page = action.page;
                break;
            case 'SET_EDITING':
                newState.editing = action.editing;
                break;
            case 'GET_POSTS':
                newState.posts = action.posts;
                newState.totalItems = action.totalItems;
                newState.itemsPerPage = action.itemsPerPage;
                break;
            case 'CREATE_POST':
                newState.posts = [action.post, ...newState.posts.slice(0, 7)];
                break;
            case 'UPDATE_POST':
                newState.posts = newState.posts.map(post =>
                    post._id === action.post._id ? action.post : post
                );
                newState.post =
                    (newState.post &&
                        newState.post._id === action.post._id &&
                        action.post) ||
                    newState.post;
                break;
            case 'DELETE_POST':
                newState.posts = newState.posts.filter(
                    post => post._id !== action.postId
                );
                newState.post =
                    newState.post && newState.post._id === action.postId
                        ? null
                        : newState.post;
                break;
            case 'SET_POST':
                newState.post = action.post;
                break;
            case 'CREATE_COMMENT':
                newState.post =
                    (newState.post._id === action.comment.postId && {
                        ...newState.post,
                        comments: [...newState.post.comments, action.comment]
                    }) ||
                    newState.post;
                break;
            case 'UPDATE_COMMENT':
                newState.post =
                    (newState.post._id === action.comment.postId && {
                        ...newState.post,
                        comments: newState.post.comments.map(comment =>
                            comment._id === action.comment._id
                                ? action.comment
                                : comment
                        )
                    }) ||
                    newState.post;
                break;
            case 'DELETE_COMMENT':
                newState.post =
                    (newState.post._id === action.postId && {
                        ...newState.post,
                        comments: newState.post.comments.filter(
                            comment => comment._id !== action.commentId
                        )
                    }) ||
                    newState.post;
                break;
            default:
                break;
        }
        return newState;
    };
}

export default async function getReducer() {
    // const data = await fetch('/assets/data/index.json').then(res => res.json());
    const data = {
        page: 0,
        posts: []
    };

    return (state = data, action) => {
        const newState = { ...state };
        switch (action.type) {
            case 'SET_POSTS_PAGE':
                newState.page = action.page;
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
                    post => post._id !== action.post
                );
                newState.post =
                    newState.post && newState.post._id === action.post
                        ? null
                        : newState.post;
                break;
            case 'SET_POST':
                newState.post = action.post;
                break;
            default:
                break;
        }
        return newState;
    };
}

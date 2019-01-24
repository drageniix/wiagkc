import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/FeedPage/PostForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, setEditing } from '../redux/actions/feed';
import Post from '../components/FeedPage/Post';
import Comments from '../components/FeedPage/Comments';
import LoadingIcon from '../components/LoadingIcon';
import { isAuth } from '../redux/selectors/users';

export class PostPage extends Component {
    static propTypes = {
        post: PropTypes.object,
        postId: PropTypes.string,
        showForm: PropTypes.bool,
        editable: PropTypes.bool,
        getPost: PropTypes.func,
        setEditing: PropTypes.func,
        loading: PropTypes.bool
    };

    componentDidMount() {
        this.props.getPost(this.props.postId);
    }

    render() {
        const { post, showForm, editable, loading } = this.props;
        return (
            <div className="individual-post" onClick={() => setEditing('')}>
                {(loading && <LoadingIcon />) || (
                    <div className="individual-post__container">
                        {(post && (
                            <Fragment>
                                {(showForm && editable && (
                                    <PostForm post={post} />
                                )) || <Post post={post} editable={editable} />}
                                <Comments />
                            </Fragment>
                        )) ||
                            'No Post Found'}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, { match }) => ({
    showForm: !!state.feed.post && state.feed.editing === state.feed.post._id,
    editable:
        !!state.feed.post &&
        (state.feed.post.creator._id === state.user.userId ||
            isAuth(state.user, 3)),
    postId: match.params.postId,
    post: state.feed.post,
    loading: state.common.loading
});

const mapDispatchToProps = { getPost, setEditing };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PostPage));

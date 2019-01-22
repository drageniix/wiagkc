import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/FeedPage/PostForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, setEditing } from '../redux/actions/feed';
import Post from '../components/FeedPage/Post';
import Comments from '../components/FeedPage/Comments';
import LoadingIcon from '../components/LoadingIcon';

export class PostPage extends Component {
    static propTypes = {
        post: PropTypes.object,
        postId: PropTypes.string,
        showForm: PropTypes.bool,
        editable: PropTypes.bool,
        getPost: PropTypes.func,
        setEditing: PropTypes.func
    };

    componentDidMount() {
        this.props.getPost(this.props.postId);
    }

    render() {
        const { post, showForm, editable } = this.props;
        return (
            <div className="individual-post" onClick={() => setEditing('')}>
                {(post && (
                    <div className="individual-post__container">
                        {(showForm && editable && <PostForm post={post} />) || (
                            <Post post={post} editable={editable} />
                        )}
                        <Comments />
                    </div>
                )) || <LoadingIcon />}
            </div>
        );
    }
}

const mapStateToProps = (state, { match }) => ({
    showForm: !!state.feed.post && state.feed.editing === state.feed.post._id,
    editable:
        !!state.feed.post && state.feed.post.creator._id === state.user.userId,
    postId: match.params.postId,
    post: state.feed.post
});

const mapDispatchToProps = { getPost, setEditing };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PostPage));

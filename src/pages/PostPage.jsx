import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/FeedPage/PostForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, setEditing } from '../redux/actions/feed';
import Post from '../components/FeedPage/Post';
import Comments from '../components/FeedPage/Comments';

export class PostPage extends Component {
    static propTypes = {
        editing: PropTypes.string,
        post: PropTypes.object,
        postId: PropTypes.string,
        getPost: PropTypes.func,
        setEditing: PropTypes.func
    };

    componentDidMount() {
        this.props.getPost(this.props.postId);
    }

    render() {
        const { post, editing } = this.props;
        return (
            <div className="individual-post" onClick={() => setEditing('')}>
                {(post && (
                    <div>
                        {(editing === post._id && <PostForm post={post} />) || (
                            <Post post={post} editable />
                        )}
                        <Comments />
                    </div>
                )) ||
                    'No post found.'}
            </div>
        );
    }
}

const mapStateToProps = (state, { match }) => ({
    editing: state.feed.editing,
    postId: match.params.postId,
    post: state.feed.post
});

const mapDispatchToProps = { getPost, setEditing };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PostPage));

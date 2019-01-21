import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/FeedPage/PostForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../redux/actions/feed';
import Post from '../components/FeedPage/Post';

export class PostPage extends Component {
    static propTypes = {
        post: PropTypes.object,
        match: PropTypes.object,
        getPost: PropTypes.func
    };

    state = {
        postId: this.props.match.params.postId
    };

    componentDidMount() {
        this.props.getPost(this.state.postId);
    }

    render() {
        return (
            <div>
                {(this.props.post && (
                    <div>
                        <PostForm post={this.props.post} />
                        <Post post={this.props.post} />
                    </div>
                )) ||
                    'No post found.'}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.feed.post
});

const mapDispatchToProps = { getPost: id => getPost(id) };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PostPage));

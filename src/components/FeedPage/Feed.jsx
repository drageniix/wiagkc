import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isAuth } from '../../redux/selectors/users';
import Post from './Post';
import PostForm from './PostForm';

export class Feed extends Component {
    static propTypes = {
        posts: PropTypes.array,
        canPost: PropTypes.bool,
        history: PropTypes.object
    };

    render() {
        const { posts, canPost, history } = this.props;

        return (
            <div className="posts">
                {canPost && <PostForm />}
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        post={post}
                        onClick={() => history.push('/feed/' + post._id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.feed.posts,
    canPost: isAuth(state.user, 1) && state.feed.page === 1
});

export default connect(mapStateToProps)(withRouter(Feed));

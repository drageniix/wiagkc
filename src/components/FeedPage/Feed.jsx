import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isAuth } from '../../redux/selectors/users';
import Post from './Post';
import PostForm from './PostForm';
import LoadingIcon from '../LoadingIcon';

export class Feed extends Component {
    static propTypes = {
        posts: PropTypes.array,
        canPost: PropTypes.bool,
        loading: PropTypes.bool
    };

    render() {
        const { posts, canPost, loading } = this.props;

        return (
            <div className="feed__posts">
                {canPost && <PostForm />}
                {(loading && <LoadingIcon />) ||
                    (posts.length === 0 && 'No Posts found.') ||
                    posts.map((post, index) => (
                        <Post key={index} post={post} fromFeed />
                    ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.feed.posts,
    loading: state.common.loading,
    canPost: isAuth(state.user, 1) && state.feed.page === 1
});

export default connect(mapStateToProps)(Feed);

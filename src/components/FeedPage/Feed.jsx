import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/feed';
import { isAuth } from '../../redux/selectors/users';
import PostForm from './PostForm';

export class Feed extends Component {
    static propTypes = {
        posts: PropTypes.array,
        getPosts: PropTypes.func,
        canPost: PropTypes.bool
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, canPost } = this.props;

        return (
            <div className="posts">
                {canPost && <PostForm />}
                {posts.map((post, index) => (
                    <div key={index} className="posts__post">
                        <h1 className="posts__post--title">{post.title}</h1>
                        <h2 className="posts__post--author">
                            {post.creator.name}
                        </h2>
                        <h6 className="posts__post--date">{post.updatedAt}</h6>
                        <p className="posts__post--content">{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.feed.posts,
    canPost: isAuth(state.user, 1)
});

const mapDispatchToProps = {
    getPosts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

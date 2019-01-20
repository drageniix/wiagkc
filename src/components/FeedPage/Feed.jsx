import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/feed';

export class Feed extends Component {
    static propTypes = {
        posts: PropTypes.array,
        getPosts: PropTypes.func
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <h2>{post.creator.name}</h2>
                        <h6>{post.createdAt}</h6>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.feed.posts
});

const mapDispatchToProps = {
    getPosts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

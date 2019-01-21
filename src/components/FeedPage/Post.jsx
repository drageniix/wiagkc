import React from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');

const Post = ({ post, onClick }) => {
    return (
        <div className="posts__post" onClick={onClick}>
            <h1 className="posts__post--title">{post.title}</h1>
            <h2 className="posts__post--author">{post.creator.name}</h2>
            <h6 className="posts__post--date">{post.updatedAt}</h6>
            <ReactMarkdown
                className="posts__post--content"
                source={post.content}
            />
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    onClick: PropTypes.func
};

export default Post;

import React from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');
import { setEditing } from '../../redux/actions/feed';
import { connect } from 'react-redux';

const Post = ({ post, setEditing, editable }) => {
    return (
        <div
            className="posts__post"
            onClick={editable && (() => setEditing(post._id))}
        >
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
    setEditing: PropTypes.func,
    editable: PropTypes.bool
};

const mapDispatchToProps = {
    setEditing
};

export default connect(
    null,
    mapDispatchToProps
)(Post);

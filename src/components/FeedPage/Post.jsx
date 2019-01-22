import React from 'react';
import PropTypes from 'prop-types';
const ReactMarkdown = require('react-markdown');
import { setEditing } from '../../redux/actions/feed';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Post = ({ post, setEditing, editable, userId, history }) => {
    return (
        <div
            className="posts__post"
            onClick={() =>
                (userId === post.creator._id &&
                    editable &&
                    setEditing(post._id)) ||
                history.push('/feed/' + post._id)
            }
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
    editable: PropTypes.bool,
    history: PropTypes.object,
    userId: PropTypes.string
};

const mapStateToProps = state => ({
    userId: state.user.userId
});

const mapDispatchToProps = {
    setEditing
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Post));

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { setEditing } from '../../redux/actions/feed';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Post = ({ post, setEditing, editable, history, fromFeed }) => {
    return (
        <div
            className={'post ' + (fromFeed ? 'post__feed' : '')}
            onClick={() =>
                (editable && setEditing(post._id)) ||
                history.push('/feed/' + post._id)
            }
        >
            <h1 className="post__title">{post.title}</h1>
            <ReactMarkdown
                className="post__content"
                source={
                    fromFeed
                        ? post.content.substring(0, 500) +
                          ((post.content.length > 500 && '...') || '')
                        : post.content
                }
            />
            <h2 className="post__author">{post.creator.name}</h2>
            <h6 className="post__date">{post.updatedAt}</h6>
            <h6 className="post__comments">
                {post.comments.length} Comment
                {post.comments.length === 1 ? '' : 's'}
            </h6>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    setEditing: PropTypes.func,
    editable: PropTypes.bool,
    history: PropTypes.object,
    fromFeed: PropTypes.bool
};

const mapDispatchToProps = {
    setEditing
};

export default connect(
    null,
    mapDispatchToProps
)(withRouter(Post));

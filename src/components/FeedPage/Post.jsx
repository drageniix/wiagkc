import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { setEditing } from '../../redux/actions/feed';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isAuth } from '../../redux/selectors/users';

const Post = ({ post, setEditing, editable, history, isAuth, fromFeed }) => {
    return (
        <div
            className={'post ' + (fromFeed ? 'post__feed' : '')}
            onClick={() =>
                (editable && setEditing(post._id)) ||
                (isAuth && history.push('/feed/' + post._id))
            }
        >
            <h1 className="post__title">{post.title}</h1>
            <h2 className="post__author">{post.creator.name}</h2>
            <h6 className="post__date">{post.updatedAt}</h6>
            <h6 className="post__comments">
                {post.comments.length} Comment
                {post.comments.length === 1 ? '' : 's'}
            </h6>
            <ReactMarkdown
                className="post__content"
                source={
                    fromFeed
                        ? post.content.substring(0, 500) +
                          ((post.content.length > 500 && '...') || '')
                        : post.content
                }
            />
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    setEditing: PropTypes.func,
    isAuth: PropTypes.bool,
    editable: PropTypes.bool,
    history: PropTypes.object,
    fromFeed: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuth: isAuth(state.user, 0)
});
const mapDispatchToProps = {
    setEditing
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Post));

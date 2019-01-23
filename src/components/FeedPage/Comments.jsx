import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';

class Comments extends React.Component {
    render() {
        const { comments, editing, userId } = this.props;
        return (
            <div className="comments">
                {comments.map((comment, index) => (
                    <Fragment key={index}>
                        {(userId === comment.creator._id &&
                            editing === comment._id && (
                                <CommentForm comment={comment} />
                            )) || <Comment comment={comment} />}
                    </Fragment>
                ))}
                {userId && (
                    <div className="comments__new">
                        <CommentForm />
                    </div>
                )}
            </div>
        );
    }
}

Comments.propTypes = {
    editing: PropTypes.string,
    comments: PropTypes.array,
    userId: PropTypes.string
};

const mapStateToProps = state => ({
    comments: state.feed.post.comments,
    editing: state.feed.editing,
    userId: state.user.userId
});

export default connect(mapStateToProps)(Comments);

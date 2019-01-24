import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { isEditingComment } from '../../redux/selectors/feed';

class Comments extends React.Component {
    render() {
        const { comments, isEditingComment, userId } = this.props;
        return (
            <div className="comments">
                {comments.map((comment, index) => (
                    <Fragment key={index}>
                        {(isEditingComment(comment) && (
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
    isEditingComment: PropTypes.func,
    comments: PropTypes.array,
    userId: PropTypes.string
};

const mapStateToProps = state => ({
    comments: state.feed.post.comments,
    userId: state.user.userId,
    isEditingComment: isEditingComment(state)
});

export default connect(mapStateToProps)(Comments);

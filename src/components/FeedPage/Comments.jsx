import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';

class Comments extends React.Component {
    render() {
        const { comments, editing } = this.props;
        return (
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comments__comment">
                        {(editing === comment._id && (
                            <CommentForm comment={comment} />
                        )) || <Comment comment={comment} />}
                    </div>
                ))}
                <div className="comments__new">
                    <CommentForm />
                </div>
            </div>
        );
    }
}

Comments.propTypes = {
    editing: PropTypes.string,
    comments: PropTypes.array
};

const mapStateToProps = state => ({
    comments: state.feed.post.comments,
    editing: state.feed.editing
});

export default connect(mapStateToProps)(Comments);

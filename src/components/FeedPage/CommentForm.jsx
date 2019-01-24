import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaAutosize from 'react-autosize-textarea';

import {
    addComment,
    updateComment,
    deleteComment
} from '../../redux/actions/comments.js';
import { getErrors } from '../../redux/selectors/common';

export class CommentForm extends React.Component {
    state = {
        content: (this.props.comment && this.props.comment.content) || ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSumbit = type => e => {
        e.preventDefault();

        switch (type) {
            case 0:
                this.props.addComment(this.state);
                break;
            case 1:
                this.props.updateComment(this.props.comment._id, this.state);
                break;
            case 2:
                this.props.deleteComment(this.props.comment._id);
                break;
        }

        if (!this.props.comment) {
            this.setState({ content: '' });
        }
    };

    render() {
        const { errors, comment } = this.props;
        const { content } = this.state;

        return (
            <div className="comment-form">
                <div className="comment-form__input">
                    <TextAreaAutosize
                        rows={4}
                        className="comment-form__input--content"
                        value={content}
                        onChange={this.onChange}
                        placeholder="What do you think?"
                        name="content"
                    />
                </div>
                {errors && errors.content && (
                    <p className="comment-form__invalid">{errors.content}</p>
                )}
                {(comment && (
                    <div className="comment-form__buttons">
                        <button
                            className="btn btn--update"
                            onClick={this.onSumbit(1)}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn--delete"
                            onClick={this.onSumbit(2)}
                        >
                            Delete
                        </button>
                    </div>
                )) || (
                    <div className="comment-form__buttons">
                        <button
                            className="btn btn--add"
                            onClick={this.onSumbit(0)}
                        >
                            Add Comment
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: getErrors(state.common.errors)
});

const mapDispatchToProps = {
    addComment,
    updateComment,
    deleteComment
};

CommentForm.propTypes = {
    comment: PropTypes.object,
    addComment: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);

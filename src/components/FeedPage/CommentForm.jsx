import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaAutosize from 'react-autosize-textarea';
import { setEditing } from '../../redux/actions/feed';
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
        const { errors, comment, setEditing } = this.props;
        const { content } = this.state;

        return (
            <div className="comment-form">
                {!!comment && (
                    <svg
                        className="icon icon--cancel pointer"
                        onClick={() => setEditing('')}
                        viewBox="0 0 32 32"
                    >
                        <title>Cancel Editing</title>
                        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
                        <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z" />
                    </svg>
                )}
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
    deleteComment,
    setEditing
};

CommentForm.propTypes = {
    comment: PropTypes.object,
    addComment: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    errors: PropTypes.object,
    setEditing: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);

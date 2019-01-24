import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    addPost,
    updatePost,
    deletePost,
    setEditing
} from '../../redux/actions/feed';
import { getErrors } from '../../redux/selectors/common';
import { withRouter } from 'react-router-dom';
import TextAreaAutosize from 'react-autosize-textarea';

export class PostForm extends React.Component {
    state = {
        title: (this.props.post && this.props.post.title) || '',
        content: (this.props.post && this.props.post.content) || ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSumbit = type => e => {
        e.preventDefault();

        switch (type) {
            case 0:
                this.props.addPost(this.state);
                break;
            case 1:
                this.props.updatePost(this.props.post._id, this.state);
                break;
            case 2:
                this.props.deletePost(this.props.post._id);
                this.props.history.push('/feed');
                break;
        }

        if (!this.props.post) {
            this.setState({ title: '', content: '' });
        }
    };

    render() {
        const { errors, setEditing, post } = this.props;
        const { content, title } = this.state;

        return (
            <div className="post-form__container">
                {!!post && (
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
                <div className="post-form">
                    <input
                        className="post-form__title"
                        value={title}
                        onChange={this.onChange}
                        type="text"
                        placeholder="New Post Title"
                        name="title"
                    />
                    {errors && errors.title && (
                        <p className="post-form__invalid">{errors.title}</p>
                    )}
                </div>
                <div className="post-form">
                    <TextAreaAutosize
                        rows={10}
                        className="post-form__content"
                        value={content}
                        onChange={this.onChange}
                        placeholder="Share meeting minutes, cultural events, recipes, or anything else!"
                        name="content"
                    />
                    {errors && errors.content && (
                        <p className="post-form__invalid">{errors.content}</p>
                    )}
                </div>
                {(this.props.post && (
                    <div className="post-form__buttons">
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
                    <div className="post-form__buttons">
                        <button
                            className="btn btn--add"
                            onClick={this.onSumbit(0)}
                        >
                            Add Post
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
    addPost,
    updatePost,
    deletePost,
    setEditing
};

PostForm.propTypes = {
    post: PropTypes.object,
    addPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    errors: PropTypes.object,
    history: PropTypes.object,
    setEditing: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PostForm));

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost, updatePost, deletePost } from '../../redux/actions/feed';
import { getErrors } from '../../redux/selectors/common';

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
                this.props.updatePost(this.state);
                break;
            case 2:
                this.props.deletePost();
                break;
        }

        this.setState({ title: '', content: '' });
    };

    render() {
        const { errors } = this.props;
        const { content, title } = this.state;

        return (
            <div className="post">
                <div className="post__form">
                    <input
                        className="post__form--title"
                        value={title}
                        onChange={this.onChange}
                        type="text"
                        placeholder="New Post Title"
                        name="title"
                    />
                    {errors && errors.title && (
                        <p className="post__form--invalid">{errors.title}</p>
                    )}
                </div>
                <div className="post__form">
                    <textarea
                        className="post__form--content"
                        value={content}
                        onChange={this.onChange}
                        placeholder="Share a recipe, experience, or anything else!"
                        name="content"
                    />
                    {errors && errors.content && (
                        <p className="post__form--invalid">{errors.content}</p>
                    )}
                </div>
                {(this.props.post && (
                    <div className="buttons">
                        <button
                            className="post__form--btn post__form--btn--update"
                            onClick={this.onSumbit(1)}
                        >
                            Update Post
                        </button>
                        <button
                            className="post__form--btn post__form--btn--delete"
                            onClick={this.onSumbit(2)}
                        >
                            Delete Post
                        </button>
                    </div>
                )) || (
                    <div className="buttons">
                        <button
                            className="post__form--btn post__form--btn--add"
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
    errors: getErrors(state.common.errors),
    post: state.feed.post
});

const mapDispatchToProps = {
    addPost: data => addPost(data),
    updatePost: data => updatePost(data),
    deletePost
};

PostForm.propTypes = {
    post: PropTypes.object,
    addPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);

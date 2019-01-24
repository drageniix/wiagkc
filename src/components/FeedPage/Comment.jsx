import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEditing } from '../../redux/actions/feed';
import ReactMarkdown from 'react-markdown';
import { canEditComment } from '../../redux/selectors/feed';

export class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object,
        ownsComment: PropTypes.bool,
        setEditing: PropTypes.func,
        canEditComment: PropTypes.bool
    };

    render() {
        const {
            comment: {
                _id,
                content,
                creator: { name, flag }
            },
            setEditing,
            canEditComment
        } = this.props;
        return (
            <div className="comment">
                <div className="comment__user">
                    <img className="comment__user--flag" src={flag} />
                    <p className="comment__user--author">{name}</p>
                    {canEditComment && (
                        <svg
                            className="icon icon--edit pointer"
                            onClick={() => setEditing(_id)}
                            viewBox="0 0 32 32"
                        >
                            <title>Edit Event</title>
                            <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z" />
                        </svg>
                    )}
                </div>
                <ReactMarkdown className="comment__content" source={content} />
            </div>
        );
    }
}

const mapStateToProps = (state, { comment }) => ({
    canEditComment: canEditComment(state)(comment)
});

const mapDispatchToProps = {
    setEditing
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);

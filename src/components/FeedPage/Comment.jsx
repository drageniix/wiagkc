import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEditing } from '../../redux/actions/feed';

export class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object,
        ownsComment: PropTypes.bool,
        setEditing: PropTypes.func
    };

    render() {
        const {
            comment: {
                _id,
                content,
                creator: { name }
            },
            ownsComment,
            setEditing
        } = this.props;
        return (
            <div onClick={() => setEditing(_id)}>
                <p>
                    {content} by {name}
                </p>
                <p>Owner: {ownsComment}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, { comment }) => ({
    ownsComment: comment.creator._id === state.user.userId
});

const mapDispatchToProps = {
    setEditing
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);

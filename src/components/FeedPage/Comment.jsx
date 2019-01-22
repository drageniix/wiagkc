import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEditing } from '../../redux/actions/feed';
import ReactMarkdown from 'react-markdown';

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
                creator: { name, flag }
            },
            setEditing
        } = this.props;
        return (
            <div className="comment" onClick={() => setEditing(_id)}>
                <div className="comment__user">
                    <img className="comment__user--flag" src={flag} />
                    <p className="comment__user--author">{name}</p>
                </div>
                <ReactMarkdown className="comment__content" source={content} />
            </div>
        );
    }
}

const mapDispatchToProps = {
    setEditing
};

export default connect(
    null,
    mapDispatchToProps
)(Comment);

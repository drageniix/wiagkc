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
                creator: { name, flag }
            },
            setEditing
        } = this.props;
        return (
            <div onClick={() => setEditing(_id)}>
                <img className="summary__flag" src={flag} />
                <p>
                    {content} by {name}
                </p>
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

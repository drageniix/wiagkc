//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/user';
import { withRouter } from 'react-router-dom';

export class Logout extends React.Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    };

    render() {
        return (
            <button
                className="user__btn user__btn--logout"
                onClick={this.logout}
            >
                Logout
            </button>
        );
    }
}

const mapDispatchToProps = {
    logout: data => logout(data)
};

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(withRouter(Logout));

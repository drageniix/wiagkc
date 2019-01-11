//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/user/actions';

export class Logout extends React.Component {
    state = { loading: false };
    logout = e => {
        if (!this.state.loading) {
            e.preventDefault();
            e.stopPropagation();
            this.props.logout();
            this.setState({ loading: true });
        }
    };

    render() {
        return (
            <div className="user">
                <button
                    className="user__btn user__btn--logout"
                    onClick={this.logout}
                >
                    Logout
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logout: data => dispatch(logout(data))
});

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(Logout);

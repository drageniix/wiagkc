import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmAccount } from '../../redux/actions/user';
import { withRouter } from 'react-router-dom';

export class Confirm extends Component {
    state = {
        eligible: false
    };

    static propTypes = {
        confirmAccount: PropTypes.func,
        confirmEligible: PropTypes.bool,
        location: PropTypes.object
    };

    componentDidMount() {
        const {
            confirmAccount,
            location: { search, pathname }
        } = this.props;

        const token = search.substring(search.indexOf('=') + 1);
        const eligible = token !== search && pathname === '/account/confirm/';
        eligible && confirmAccount(token);
        this.setState({ eligible });
    }

    render() {
        return (
            (this.state.eligible && <div>Thanks for confirming!</div>) || null
        );
    }
}

const mapDispatchToProps = {
    confirmAccount: token => confirmAccount(1, token)
};

export default connect(
    null,
    mapDispatchToProps
)(withRouter(Confirm));

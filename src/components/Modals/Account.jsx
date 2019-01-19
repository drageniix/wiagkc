import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../UserPage/Logout';

export const AccountPage = ({ user }) => (
    <div className="account">
        <p>{user.name}</p>
        <p>{user.country}</p>
        <p>{user.email}</p>
        <Logout />
    </div>
);

const mapStateToProps = state => ({
    user: state.user.user
});

AccountPage.propTypes = {
    user: PropTypes.object
};

export default connect(mapStateToProps)(AccountPage);

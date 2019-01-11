import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../UserPage/Login';
import Logout from '../UserPage/Logout';

export const AccountPage = ({ isAuth }) => (
    <div className="account">
        <p>Discussion Board Under Maintenance</p>
        {(isAuth && <Logout />) || <Login />}
    </div>
);

const mapStateToProps = state => ({
    isAuth: state.user.privilege
});

AccountPage.propTypes = {
    isAuth: PropTypes.number
};

export default connect(mapStateToProps)(AccountPage);

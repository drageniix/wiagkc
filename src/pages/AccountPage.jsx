import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFlag, logout } from '../redux/actions/user';
import { withRouter } from 'react-router-dom';
import { setModal } from '../redux/actions/common';
import Confirm from '../components/UserPage/Confirm';
import { getMemberStatus } from '../redux/selectors/users';

export class AccountPage extends Component {
    state = {
        country: this.props.user.country
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            nextProps.user.country !== prevState.country ||
            !nextProps.user.flag
        ) {
            nextProps.getFlag(nextProps.user.country);
            return { country: nextProps.user.country };
        }
        return null;
    }

    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    };

    render() {
        const { user, status, updateUser } = this.props;
        return (
            <div className="account">
                <Confirm />
                <div className="account__content">
                    <p className="account__content--item">
                        <strong>Name: </strong>
                        {user.name}
                    </p>
                    <p className="account__content--item">
                        <strong>Country: </strong>
                        {user.flag && (
                            <img className="account__flag" src={user.flag} />
                        )}
                        {user.country}
                    </p>
                    <p className="account__content--item">
                        <strong>Email: </strong>
                        {user.email}
                    </p>
                    <p className="account__content--item">
                        <strong>Status: </strong>
                        {status}
                    </p>
                    <div className="account__buttons">
                        <button
                            className="user__btn user__btn--login"
                            onClick={updateUser}
                        >
                            Update
                        </button>
                        <button
                            className="user__btn user__btn--logout"
                            onClick={this.logout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    status: getMemberStatus(state.user.user.privilege)
});

const mapDispatchToProps = {
    getFlag: countryCode => getFlag(countryCode),
    updateUser: () => setModal(5),
    logout
};

AccountPage.propTypes = {
    user: PropTypes.object,
    status: PropTypes.string,
    getFlag: PropTypes.func,
    logout: PropTypes.func,
    updateUser: PropTypes.func,
    history: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AccountPage));

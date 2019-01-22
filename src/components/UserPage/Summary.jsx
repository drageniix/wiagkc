import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../redux/actions/user';
import { setModal } from '../../redux/actions/common';
import { getMemberStatus } from '../../redux/selectors/users';

export class AccountPage extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    };

    render() {
        const { user, status, updateUser } = this.props;
        return (
            <div className="summary__content">
                <img src={user.imageUrl} />
                <p className="summary__content--item">
                    <strong>Name: </strong>
                    {user.name}
                </p>
                <p className="summary__content--item">
                    <strong>Country: </strong>
                    {user.flag && (
                        <img className="summary__flag" src={user.flag} />
                    )}
                    {user.country}
                </p>
                <p className="summary__content--item">
                    <strong>Email: </strong>
                    {user.email}
                </p>
                <p className="summary__content--item">
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
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    status: getMemberStatus(state.user.user.privilege)
});

const mapDispatchToProps = {
    updateUser: () => setModal(5),
    logout
};

AccountPage.propTypes = {
    user: PropTypes.object,
    status: PropTypes.string,
    logout: PropTypes.func,
    updateUser: PropTypes.func,
    history: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AccountPage));

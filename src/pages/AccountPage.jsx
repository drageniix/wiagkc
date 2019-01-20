import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../components/UserPage/Logout';
import { getFlag } from '../redux/actions/user';

export class AccountPage extends Component {
    componentDidMount() {
        this.props.getFlag(this.props.user.country);
    }

    render() {
        const { user } = this.props;
        return (
            <div className="account">
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
                        {user.privilege === 3 ? 'Admin' : 'Active Member'}
                    </p>
                    <Logout />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispatchToProps = {
    getFlag: countryCode => getFlag(countryCode)
};

AccountPage.propTypes = {
    user: PropTypes.object,
    getFlag: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPage);

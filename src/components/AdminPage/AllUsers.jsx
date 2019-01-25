import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMemberStatus } from '../../redux/selectors/users';
import { getAllUsers } from '../../redux/actions/admin';
import LoadingIcon from '../LoadingIcon';

export class AllUsers extends Component {
    static propTypes = {
        users: PropTypes.array,
        getAllUsers: PropTypes.func
    };

    state = {
        loading: true,
        users: []
    };

    static getDerivedStateFromProps(nextProps) {
        nextProps.getAllUsers();
        if (nextProps.users.length > 0) {
            return { users: nextProps.users, loading: false };
        }
        return null;
    }

    render() {
        const { users, loading } = this.state;
        return (
            (loading && <LoadingIcon />) || (
                <table className="admin__users--table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Country</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                <td>{getMemberStatus(user.privilege)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        );
    }
}

const mapStateToProps = state => ({
    users: state.admin.users
});

const mapDispatchToProps = {
    getAllUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllUsers);

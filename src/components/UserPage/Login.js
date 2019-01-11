//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/user/actions';

export class Login extends React.Component {
    state = {
        loading: false,
        email: '',
        password: ''
    };

    onSumbit = e => {
        if (!this.state.loading) {
            e.preventDefault();
            e.stopPropagation();
            this.props.login(this.state);
            this.setState({ loading: true });
        }
    };

    render() {
        const { loading, email, password } = this.state;
        return (
            <div className="user">
                {loading && 'LOADING'}
                <input
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    type="email"
                    placeholder="email"
                    name="email"
                />
                <input
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                    placeholder="password"
                    name="password"
                />
                <button
                    onClick={this.onSumbit}
                    className="user__btn user__btn--login"
                >
                    Login
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data))
});

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(Login);

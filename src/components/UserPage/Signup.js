//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../redux/user/actions';

export class SignUp extends React.Component {
    state = {
        loading: false,
        email: '',
        name: '',
        password: '',
        country: ''
    };

    onSumbit = e => {
        if (!this.state.loading) {
            e.preventDefault();
            e.stopPropagation();
            this.props.signup(this.state);
            this.setState({ loading: true });
        }
    };

    render() {
        const { loading, name, country, email, password } = this.state;
        return (
            <div className="user">
                {loading && 'LOADING'}
                <input
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                    type="text"
                    placeholder="name"
                    name="name"
                />
                <input
                    value={country}
                    onChange={e => this.setState({ country: e.target.value })}
                    type="text"
                    placeholder="country"
                    name="country"
                />
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
                    className="user__btn user__btn--signup"
                    onClick={this.onSumbit}
                >
                    Signup
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signup: data => dispatch(signup(data))
});

SignUp.propTypes = {
    signup: PropTypes.func.isRequired
};

export default connect(
    undefined,
    mapDispatchToProps
)(SignUp);

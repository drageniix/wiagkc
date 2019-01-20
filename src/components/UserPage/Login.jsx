//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/user';
import { getErrors } from '../../redux/selectors/common';

export class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    onSumbit = e => {
        e.preventDefault();
        this.props.login(this.state);
    };

    render() {
        const { errors } = this.props;
        const { email, password } = this.state;

        return (
            <div className="user">
                <p>Welcome Back!</p>
                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="email"
                        placeholder="email"
                        name="email"
                    />
                    {errors && errors.email && (
                        <p className="user__input--invalid">{errors.email}</p>
                    )}
                </div>
                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={password}
                        onChange={e =>
                            this.setState({ password: e.target.value })
                        }
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    {errors && errors.password && (
                        <p className="user__input--invalid">
                            {errors.password}
                        </p>
                    )}
                </div>
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

const mapStateToProps = state => ({
    errors: getErrors(state.common.errors)
});

const mapDispatchToProps = {
    login: data => login(data)
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

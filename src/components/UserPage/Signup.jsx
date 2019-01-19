//TODO: validation

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../redux/actions/user';
import { getErrors } from '../../redux/selectors/common';

export class SignUp extends React.Component {
    state = {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        country: ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSumbit = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.signup(this.state);
    };

    render() {
        const { errors } = this.props;
        const { name, country, email, password, confirm_password } = this.state;

        return (
            <div className="user">
                <p>Welcome!</p>
                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="name"
                        name="name"
                    />
                    {errors && errors.name && (
                        <p className="user__input--invalid">{errors.name}</p>
                    )}
                </div>

                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={country}
                        onChange={this.onChange}
                        type="text"
                        placeholder="country"
                        name="country"
                    />
                    {errors && errors.country && (
                        <p className="user__input--invalid">{errors.country}</p>
                    )}
                </div>

                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={email}
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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

                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={confirm_password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="confirm password"
                        name="confirm_password"
                    />
                    {errors && errors.confirm_password && (
                        <p className="user__input--invalid">
                            {errors.confirm_password}
                        </p>
                    )}
                </div>

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

const mapStateToProps = state => ({
    errors: getErrors(state.common.errors)
});

const mapDispatchToProps = dispatch => ({
    signup: data => dispatch(signup(data))
});

SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

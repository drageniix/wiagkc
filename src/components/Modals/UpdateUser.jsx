import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../../redux/actions/user';
import { getErrors } from '../../redux/selectors/common';

export class UpdateUser extends React.Component {
    state = {
        email: this.props.user.email,
        name: this.props.user.name,
        old_password: '',
        password: '',
        confirm_password: '',
        country: this.props.user.country,
        image: null
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSumbit = e => {
        e.preventDefault();
        this.props.updateUser(this.state);
    };

    render() {
        const {
            errors,
            user: { email }
        } = this.props;
        const {
            name,
            country,
            old_password,
            password,
            confirm_password
        } = this.state;

        return (
            <div className="user">
                Update Info
                <div className="user__input">
                    <label htmlFor="email" className="user__input--title">
                        Email:
                    </label>
                    <input
                        className="user__input--data"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="email"
                        name="email"
                        disabled={true}
                    />
                </div>
                {errors && errors.email && (
                    <p className="user__input--invalid">{errors.email}</p>
                )}
                <div className="user__input">
                    <label
                        htmlFor="old_password"
                        className="user__input--title"
                    >
                        * Current Password:
                    </label>
                    <input
                        className="user__input--data"
                        value={old_password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="required"
                        name="old_password"
                    />
                </div>
                {errors && errors.old_password && (
                    <p className="user__input--invalid">
                        {errors.old_password}
                    </p>
                )}
                <div className="user__input">
                    <label htmlFor="name" className="user__input--title">
                        Name:
                    </label>
                    <input
                        className="user__input--data"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="your name"
                        name="name"
                    />
                </div>
                {errors && errors.name && (
                    <p className="user__input--invalid">{errors.name}</p>
                )}
                <div className="user__input">
                    <label htmlFor="country" className="user__input--title">
                        Country:
                    </label>
                    <input
                        className="user__input--data"
                        value={country}
                        onChange={this.onChange}
                        type="text"
                        placeholder="country of origin"
                        name="country"
                    />
                </div>
                {errors && errors.country && (
                    <p className="user__input--invalid">{errors.country}</p>
                )}
                <div className="user__input">
                    <label htmlFor="passowrd" className="user__input--title">
                        New Password:
                    </label>
                    <input
                        className="user__input--data"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="optional"
                        name="password"
                    />
                </div>
                {errors && errors.password && (
                    <p className="user__input--invalid">{errors.password}</p>
                )}
                <div className="user__input">
                    <label
                        htmlFor="confirm_password"
                        className="user__input--title"
                    >
                        Confirm Password:
                    </label>
                    <input
                        className="user__input--data"
                        value={confirm_password}
                        onChange={this.onChange}
                        type="password"
                        placeholder=""
                        name="confirm_password"
                    />
                </div>
                {errors && errors.confirm_password && (
                    <p className="user__input--invalid">
                        {errors.confirm_password}
                    </p>
                )}
                <button className="btn btn--login" onClick={this.onSumbit}>
                    Update
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: getErrors(state.common.errors),
    user: state.user.user
});

const mapDispatchToProps = {
    updateUser
};

UpdateUser.propTypes = {
    user: PropTypes.object,
    updateUser: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateUser);

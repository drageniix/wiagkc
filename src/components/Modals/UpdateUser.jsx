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
                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="email"
                        name="email"
                        disabled={true}
                    />
                    {errors && errors.email && (
                        <p className="user__input--invalid">{errors.email}</p>
                    )}
                </div>
                <div className="user__input">
                    <input
                        className="user__input--data"
                        value={old_password}
                        onChange={this.onChange}
                        type="password"
                        placeholder=" * current password"
                        name="old_password"
                    />
                    {errors && errors.old_password && (
                        <p className="user__input--invalid">
                            {errors.old_password}
                        </p>
                    )}
                </div>
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
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="new password"
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
                        placeholder="confirm new password"
                        name="confirm_password"
                    />
                    {errors && errors.confirm_password && (
                        <p className="user__input--invalid">
                            {errors.confirm_password}
                        </p>
                    )}
                </div>

                <button
                    className="user__btn user__btn--login"
                    onClick={this.onSumbit}
                >
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
    updateUser: data => updateUser(data)
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

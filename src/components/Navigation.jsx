import React, { Fragment } from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setModal } from '../redux/actions/common';
import { getFirstName } from '../redux/selectors/users';

export const Navigation = ({ username, data, setModal }) => (
    <nav className="navigation section--down">
        <ResponsiveImage className="navigation__logo" image={data.logo} />
        <span className="navigation__title">{data.shortName}</span>
        <span className="navigation__links">
            {data.links.map((item, index) => (
                <NavLink
                    key={index}
                    className="navigation__links--link pointer"
                    to={item.href}
                >
                    {item.display}
                </NavLink>
            ))}
            {(username && (
                <Fragment>
                    <NavLink
                        className="navigation__links--link navigation__links--username pointer"
                        to="/account"
                    >
                        {username}
                    </NavLink>
                </Fragment>
            )) || (
                <Fragment>
                    <a
                        className="navigation__links--link pointer"
                        onClick={setModal(3)}
                    >
                        Login
                    </a>
                    <a
                        className="navigation__links--link navigation__links--signup pointer"
                        onClick={setModal(4)}
                    >
                        Signup
                    </a>
                </Fragment>
            )}
        </span>
    </nav>
);

const mapStateToProps = state => ({
    username: getFirstName(state.user),
    data: state.common.marginals
});

const mapDispatchToProps = dispatch => ({
    setModal: mode => () => dispatch(setModal(mode))
});

Navigation.propTypes = {
    username: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    data: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);

import React, { Fragment } from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getFirstName, isAuth } from '../redux/selectors/users';
import { withRouter } from 'react-router-dom';
import { openLoginModal, openSignupModal } from '../redux/actions/modals';

export const Navigation = ({
    history,
    username,
    admin,
    data,
    openLoginModal,
    openSignupModal
}) => (
    <nav className="navigation section--down">
        <ResponsiveImage
            className="navigation__logo pointer"
            image={data.logo}
            onClick={() => history.push('/')}
        />
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
            <span className="navigation__links--link">|</span>
            {(username && (
                <Fragment>
                    {admin && (
                        <NavLink
                            className="navigation__links--link navigation__links pointer"
                            to="/admin"
                        >
                            Admin
                        </NavLink>
                    )}
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
                        onClick={openLoginModal}
                    >
                        Login
                    </a>
                    <a
                        className="navigation__links--link navigation__links--signup pointer"
                        onClick={openSignupModal}
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
    admin: isAuth(state.user, 3),
    data: state.common.marginals
});

const mapDispatchToProps = {
    openLoginModal,
    openSignupModal
};

Navigation.propTypes = {
    admin: PropTypes.bool,
    username: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    data: PropTypes.object.isRequired,
    openLoginModal: PropTypes.func.isRequired,
    openSignupModal: PropTypes.func.isRequired,
    history: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Navigation));

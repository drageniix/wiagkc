import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setModal } from '../redux/common/actions';

export const Navigation = ({ isAuth, data, setModal }) => (
    <nav className="navigation section--down">
        <ResponsiveImage className="navigation__logo" image={data.logo} />
        <span className="navigation__title">{data.shortName}</span>
        <span className="navigation__links">
            {data.links.map((item, index) => (
                <NavLink
                    key={index}
                    className="navigation__links--link"
                    to={item.href}
                >
                    {item.display}
                </NavLink>
            ))}
            <a className="navigation__links--link pointer" onClick={setModal}>
                {isAuth ? 'Account' : 'Login'}
            </a>
        </span>
    </nav>
);

const mapStateToProps = state => ({
    isAuth: state.user.privilege,
    data: state.common.marginals
});

const mapDispatchToProps = dispatch => ({
    setModal: () => dispatch(setModal(3))
});

Navigation.propTypes = {
    isAuth: PropTypes.number,
    data: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);

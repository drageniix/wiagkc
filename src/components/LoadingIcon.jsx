import React from 'react';
import PropTypes from 'prop-types';

const LoadingIcon = ({ className }) => {
    return (
        <div className={className || 'loading-icon'}>
            <img src="https://i.gifer.com/ZNeS.gif" className="loading-icon" />
            <h4 className="centered">Loading!</h4>
        </div>
    );
};

LoadingIcon.propTypes = {
    className: PropTypes.string
};

export default LoadingIcon;

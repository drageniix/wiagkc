import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Footer = ({ data }) => (
    <footer className="section footer" id="footer">
        <div className="footer__logobox">
            <ResponsiveImage
                className="footer__logobox--logo"
                image={data.logo}
            />
            <h2 className="section__title">{data.title}</h2>
        </div>
        <div className="footer__data">
            <p>
                <a href={`https://twitter.com/${data.twitter}`}>
                    @{data.twitter}
                </a>
            </p>
            <p>
                <a href={'tel:' + data.phone.replace('-', '')}>{data.phone}</a>
            </p>
            <p>
                <a href={'mailto:' + data.email}>{data.email}</a>
            </p>
            <p>
                <a href={data.geo} target="_blank" rel="noopener noreferrer">
                    {data.address}
                </a>
            </p>
        </div>
    </footer>
);

const mapStateToProps = state => ({
    data: state.common.marginals
});

Footer.propTypes = {
    data: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Footer);

import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const path = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
export const WestIndies = ({ data }) => (
    <div>
        <h2 className="section__title">{data.title}</h2>
        <div className="caricom__text">
            {data.more.description.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <figure>
                <a
                    href={path + '/' + data.map.image.src}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ResponsiveImage
                        className="caricom__image"
                        image={data.map.image}
                    />
                </a>
                <figcaption className="caricom__caption">
                    {data.map.caption}
                </figcaption>
            </figure>
        </div>
    </div>
);

WestIndies.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    data: state.home.caricom
});

export default connect(mapStateToProps)(WestIndies);

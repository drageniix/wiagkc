import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../../redux/actions/common';

export const Caricom = ({ data, setModalClose }) => (
    <section id="caricom" className="section section--up caricom">
        <figure className="caricom__map">
            <ResponsiveImage
                className="caricom__map--image"
                image={data.map.image}
            />
            <figcaption className="caricom__map--caption">
                {data.map.caption}
            </figcaption>
        </figure>
        <h2 className="section__title">{data.title}</h2>
        <p className="caricom__text">
            {data.blurb} <a onClick={setModalClose}>Learn More...</a>
        </p>
    </section>
);

Caricom.propTypes = {
    data: PropTypes.object.isRequired,
    setModalClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.home.caricom
});

const mapDispatchToProps = dispatch => ({
    setModalClose: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModal(1));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Caricom);

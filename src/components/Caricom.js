import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../redux/actions';

export const Caricom = ({ data, setModal }) => (
    <section id="caricom" className="caricom">
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
            {data.blurb} <a onClick={setModal}>Learn More...</a>
        </p>
    </section>
);

Caricom.propTypes = {
    data: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.caricom
});

const mapDispatchToProps = dispatch => ({
    setModal: event => {
        if (event.target === event.currentTarget){
            event.preventDefault()
            dispatch(setModal(1));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Caricom);

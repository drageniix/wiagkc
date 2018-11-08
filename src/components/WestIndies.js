import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../redux/actions';

const path = location.pathname.slice(0, location.pathname.lastIndexOf('/'));
export const WestIndies = ({ data, setModal }) => (
    <div className="modal" onClick={setModal}>
        <div className="modal__content">
            <h2 className="section__title">{data.title}</h2>
            <div className="modal__text">
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
                            className="modal__image"
                            image={data.map.image}
                        />
                    </a>
                    <figcaption className="modal__caption">
                        {data.map.caption}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
);

WestIndies.propTypes = {
    data: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.caricom
});

const mapDispatchToProps = dispatch => ({
    setModal: event => {
        if (event.target === event.currentTarget) {
            event.preventDefault();
            dispatch(setModal(0));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WestIndies);

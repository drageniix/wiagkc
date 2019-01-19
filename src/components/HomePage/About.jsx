import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const About = ({ data }) => (
    <section className="section section--up about" id="about">
        <h2 className="section__title">{data.title}</h2>
        <p
            className="about__content"
            dangerouslySetInnerHTML={{ __html: data.content }}
        />
    </section>
);

const mapStateToProps = state => ({
    data: state.home.about
});

About.propTypes = {
    data: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(About);

import React from "react"
import ResponsiveImage from "responsive-json-webpack-plugin/react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

export const Photos = ({ images }) => (
    <section className="photos" id="photos">
        <section className="photos__images">
            {images.map((item, index) => (
                <ResponsiveImage image={item} key={index}/>
            ))}
        </section>
    </section>
)


const mapStateToProps = state => ({
    images: state.photos.images
})

Photos.propTypes = {
    images: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Photos)
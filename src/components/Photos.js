import React from "react"
import ResponsiveImage from "responsive-json-webpack-plugin/react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

export const Photos = ({ data }) => (
    <section className="photos" id="photos">
        <section className="photos__images">
            {data.images.map((item, index) => (
                <ResponsiveImage image={item} key={index}/>
            ))}
        </section>
    </section>
)


const mapStateToProps = state => ({
    data: state.photos
})

Photos.propTypes = {
    data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Photos)
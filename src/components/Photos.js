import React from "react"
import ResponsiveImage from './ResponsiveImage'
import Fade from 'react-reveal/Fade'

const Photos = ({ data }) => (
    <section className="photos" id="photos">
        <section className="photos__images">
            <Fade bottom cascade>
                {data.images.map((item, index) => (
                    <ResponsiveImage image={item} key={index}/>
                ))}
            </Fade>
        </section>
    </section>
)

export default Photos
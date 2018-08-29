import React from "react"
import ResponsiveImage from './ResponsiveImage'
import Fade from 'react-reveal/Fade'

const Photos = ({ data }) => (
    <section className="photos" id="photos">
        <Fade bottom cascade>
            <section className="photos__images">
                {data.images.map((item, index) => (
                    <ResponsiveImage image={item} key={index}/>
                ))}
            </section>
        </Fade>
    </section>
)

export default Photos
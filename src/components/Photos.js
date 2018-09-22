import React from "react"
import ResponsiveImage from './ResponsiveImage'

export const Photos = ({ data }) => (
    <section className="photos" id="photos">
        <section className="photos__images">
            {data.images.map((item, index) => (
                <ResponsiveImage image={item} key={index}/>
            ))}
        </section>
    </section>
)

export default Photos
import React from 'react'
import { connect } from 'react-redux'

const makeImageSrcSet = (srcSets, imagePath) => srcSets.map(size => `${imagePath}/${size.src} ${size.size}w`).join(', ')

const ResponsiveImage = ({ className, image, alt, imagePath }) => (
    image.img && !!window.HTMLPictureElement ?
        <picture>
            {image.sources && image.sources.map((source, index) => (
                <source
                    key={index}
                    srcSet={source.srcset && makeImageSrcSet(source.srcset, imagePath)}
                    sizes={source.sizes}
                    media={source.media} />
            ))}

            <img src={`${imagePath}/${image.img.src}`}
                srcSet={image.img.srcset && makeImageSrcSet(image.img.srcset, imagePath)}
                sizes={image.img.sizes}
                alt={image.alt || alt}
                className={className} />

        </picture>
        :
        <img src={`${imagePath}/${image.src}`}
            alt={alt || image.alt || image.src}
            className={className} />
)

const mapStateToProps = state => ({
    imagePath: state.imagePath
})

export default connect(mapStateToProps)(ResponsiveImage)
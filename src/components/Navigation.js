import React from 'react'
import ResponsiveImage from './ResponsiveImage'

export const Navigation = ( { data }) => (
    <nav className="navigation">
        <ResponsiveImage className="navigation__logo" image={data.logo}/>
        <span className="navigation__title">
            {data.shortName}
        </span>
        <span className="navigation__links">
            {data.links.map((item, index) => (
                <a key={index} className="navigation__links--link" href={item.href}>
                    {item.display}
                </a>
            ))}
        </span>
    </nav>
)

export default Navigation
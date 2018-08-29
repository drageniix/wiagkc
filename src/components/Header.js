import React from "react"

const Header = ({ data }) => (
    <header className="header" id="top">
        <div className="header__hero">
            <h1 className="header__hero--title">{data.title}</h1>
            <h2 className="header__hero--subtitle">{data.subtitle}</h2>
            <h3 className="header__hero--tagline">{data.tagline}</h3>
        </div>
    </header>
)

export default Header

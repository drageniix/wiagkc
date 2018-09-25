import React from 'react'
import { connect } from 'react-redux'

export const SVG = ({ icon, title, className = ""}) => (
    <svg className={className} viewBox={icon.viewbox}>
        <title>{title}</title>
        <path d={icon.path}></path>
    </svg>
)

const mapStateToProps = (state, { svg }) => ({
    icon: state.icons[svg] || state.icons['unknown'],
    title: svg + " icon"
})
export default connect(mapStateToProps)(SVG)
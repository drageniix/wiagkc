import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

export const SVG = ({ icon, title, className = ""}) => (
    <svg className={className} viewBox={icon.viewbox}>
        <title>{title}</title>
        {icon.path ? 
            <path d={icon.path} /> : 
            icon.g.map((g, gIndex) => (
                <g key={gIndex}>
                    {g.map((data, pathIndex) => getSVGComponent(data, pathIndex))}
                </g>
            ))
        }
    </svg>
)

function getSVGComponent(data, index){
    switch (data.type) {
    case "circle":
        return <circle key={index} cx={data.cx} cy={data.cy} r={data.r} />
    default:
        return <path key={index} d={data}/>
    }
}

const mapStateToProps = (state, { svg = "unknown" }) => ({
    icon: (state.icons && state.icons[svg]) || {
        "viewbox": "0 0 20 20",
        "path": "M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM12 7c0 0.28-0.21 0.8-0.42 1l-1.58 1.58c-0.57 0.58-1 1.6-1 2.42v1h2v-1c0-0.29 0.21-0.8 0.42-1l1.58-1.58c0.57-0.58 1-1.6 1-2.42 0-2.209-1.791-4-4-4s-4 1.791-4 4v0h2c0-1.105 0.895-2 2-2s2 0.895 2 2v0zM9 15v2h2v-2h-2z"
    },
    title: svg + " icon"
})

SVG.propTypes = {
    svg: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(SVG)
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import SVG from "./SVG"

export const Activities = ({ data }) => (
    <section className="activities" id="activities">
        <section className="activities__box">
            {data.types.map((item, index) => (
                <div key={index} className="activities__activity">
                    <div className="activities__activity--icon">
                        <SVG svg={item.icon}/>
                    </div>
                    <h4 className="activities__activity--header">{item.type}</h4>
                    <ul className="activities__activity--exampleList">
                        {item.examples.map((ex, exIndex) => (
                            <li key={exIndex} className="activities__activity--example">
                                {ex}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    </section>
)

const mapStateToProps = state => ({
    data: state.activities
})

Activities.propTypes = {
    data: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(Activities)
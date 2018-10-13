import React from "react"
import PropTypes from "prop-types"

export class ErrorBoundary extends React.Component {
    state = { error: undefined }

    componentDidCatch(error, info) {
        this.setState({
            error: {
                error,
                info
            }
        })
    }

    render() {
        return this.state.error ?
            (
                <div className="errorpage">
                    <div className="errorpage__box">
                        <h1 className="errorpage__box--heading">Oh no! Something went wrong!</h1>
                        <div className="errorpage__box--body">
                            <p>{this.state.error.error}</p>
                            <p>{this.state.error.info}</p>
                        </div>
                    </div>
                </div>
            ) : (
                this.props.children
            )
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}

export default ErrorBoundary

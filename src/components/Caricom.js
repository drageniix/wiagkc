import React from "react"
import ResponsiveImage from './ResponsiveImage'

export class Caricom extends React.Component {
    state = {modal : ""}

    openModal = () => {
        this.setState({modal : this.props.data})
    }

    closeModal = event => {
        event.preventDefault()
        if (event.target === event.currentTarget) {
            this.setState({ modal: "" })
        }
    }
    
    render(){
        return (
            <section id="caricom" className="caricom">
                { this.state.modal ? <CaricomModal data={this.props.data} close={this.closeModal} /> : undefined }
                <section className="caricom__map">
                    <ResponsiveImage className="caricom__map--image" image={this.props.data.map.image} />
                    <caption className="caricom__map--caption">{this.props.data.map.caption}</caption>
                </section>
                <h2 className="section__title">{this.props.data.title}</h2>
                <p className="caricom__text">{this.props.data.blurb} <a onClick={this.openModal}>Learn More...</a></p> 
            </section>
    )}
}

const path = location.pathname.slice(0, location.pathname.lastIndexOf('/')) + "/assets/images"
export const CaricomModal = ({data, close}) => (
    <div className="modal" onClick={close}>
        <div className="modal__content">
            <h2 className="section__title">{data.title}</h2>
            <div className="modal__text">
                {data.more.description.map((item, index) => (
                    <p key={index}>
                        {item}
                    </p>
                ))}
                <div>
                    <a href={path + "/" + data.map.image.src}
                        rel="noopener noreferrer" target="_blank">
                        <ResponsiveImage className="modal__image" image={data.map.image} />
                    </a>
                    <caption className="modal__caption">{data.map.caption}</caption>
                </div>
            </div>
        </div>
    </div>
)

export default Caricom
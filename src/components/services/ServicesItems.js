import React from 'react';
import { Link } from "react-router-dom";

const ServicesItems = ({ services }) => {

    const ShortText = (text, maxLength = 50) => {
        if (!text) { return '' }
        if (text.length <= maxLength) { return text }
        return text.substr(0, maxLength) + ' ... '
    }

    return (
        <div className="column is-one-third">
            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
                <div className="card-title">
                    <h4>{services.title}</h4>
                </div>
                <div className="card-icon">
                    <img src={services.image} alt="" />
                </div>
                <div className="card-text">
                    <p>{ShortText(services.description)}</p>
                </div>
                <div className="card-action">
                    <Link to={`/services/${services.id}`} className="button btn-align-md accent-btn raised">{services.btnTitle}</Link>
                </div>
            </div>
        </div>
    )
}

export default ServicesItems;
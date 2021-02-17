import React from 'react';

const ServicesItems = ({ services }) => {

    const ShortText = (text, maxLength = 50) => {
        if (!text) { return '' }
        if (text.length <= maxLength) { return text }
        return text.substr(0, maxLength) + '...'
    }

    return (
        <div className="column is-one-third">
            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
                <div className="card-title">
                    <h4>{services.title}</h4>
                </div>
                <div className="card-icon">
                    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                </div>
                <div className="card-text">
                    <p>{ShortText(services.description)}</p>
                </div>
                <div className="card-action">
                    <a href="#" className="button btn-align-md accent-btn raised">{services.btnTitle}</a>
                </div>
            </div>
        </div>
    )
}

export default ServicesItems;
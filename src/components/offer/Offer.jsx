import React from 'react';
import './Offer.css';
import './OfferMedia.css';

const Offer = () => {
    return (
        <div className='offer-card'>
            <div className="offer-card-image-container"></div>
            <h1>
                SOFTWARE DEVELOPMENT
            </h1>
            <p>
                Our competence lies in providing Network and Security services that safeguard your networks and detects threats before a breach occurs.
            </p>
            <button className='offer-learn-more-btn'>Learn more</button>
        </div>
    )
}

export default Offer 
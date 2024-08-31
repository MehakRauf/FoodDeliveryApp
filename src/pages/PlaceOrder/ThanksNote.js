import React from 'react';
import './ThanksNote.css'; 

const ThanksNote = () => {
    return (
        <div className="thanks-note">
            <h1>Thank You!</h1>
            <p>Your order has been successfully placed.</p>
            <p>We’re excited to bring the food to your table.</p>
            <p>Your delivery will arrive shortly. In the meantime, feel free to browse our menu for more delicious options!</p>
            <div className="cta-container">
                <a href="/" className="btn-home">Return to Home</a>
            </div>
        </div>
    );
};

export default ThanksNote;

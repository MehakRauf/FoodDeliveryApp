import React, { useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const navigate = useNavigate();

    return (
        <div className="payment-methods">
            <form className="payment-form" >
                <div className="card-payment">
                    <h2>Card Payment</h2>
                    <div className="card-details">
                        <label htmlFor="card-number">Card Number</label>
                        <input
                            type="text"
                            id="card-number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                        <label htmlFor="card-name">Cardholder Name</label>
                        <input
                            type="text"
                            id="card-name"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="Enter name"
                            required
                        />
                        <div className="expiry-cvv">
                            <div className="expiry-date">
                                <label htmlFor="expiry-date">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiry-date"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div className="cvv">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="123"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cod">
                    <h2>Cash on Delivery</h2>
                    <label>
                        <input type="checkbox" /> Pay with cash upon delivery
                    </label>
                </div>
                <button type="submit" style={{ width: "100%" }} onClick={()=>navigate('./thanks')}>Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;

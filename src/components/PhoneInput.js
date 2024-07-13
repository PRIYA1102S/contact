import React from 'react';
import './PhoneInput.css';

const PhoneInput = ({ value, onChange }) => {
    return (
        <div className="phone-input-container">
            <span className="phone-prefix">+91</span>
            <input
                type="tel"
                value={value}
                onChange={onChange}
                className="phone-input"
                placeholder="Mobile number"
                required
            />
        </div>
    );
};

export default PhoneInput;

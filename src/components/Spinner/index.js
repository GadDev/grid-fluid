import React from 'react';

import './spinner.css';

const Spinner = () => (
    <div className="spinner">
        <div className="pulse-container">
            <div className="pulse-bubble pulse-bubble-1" />
            <div className="pulse-bubble pulse-bubble-2" />
            <div className="pulse-bubble pulse-bubble-3" />
        </div>
    </div>
);

export default Spinner;

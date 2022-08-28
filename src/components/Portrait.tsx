import React from 'react';
import './Portrait.css';
import logo from './logo.png';

const Portrait: React.FC = () => {
    return (
        <div className='Portrait'>
            <img src={logo} alt="portrait" />
        </div>
    );
};

export default Portrait;

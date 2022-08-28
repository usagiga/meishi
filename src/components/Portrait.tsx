import React from 'react';
import './Portrait.scss';
import '../lib/animations/nyu.scss'
import logo from './logo.png';

const Portrait: React.FC = () => {
    return (
        <div className='Portrait nyu-outer'>
            <img src={logo} alt="portrait" className='nyu' />
        </div>
    );
};

export default Portrait;

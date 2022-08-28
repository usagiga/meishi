import React from 'react';
import './Portrait.scss';
import '../lib/animations/nyu.scss'
import logo from './logo.png';
import CircleWindow from "../lib/components/CircleWindow";

const Portrait: React.FC = () => {
    return (
        <CircleWindow className='Portrait'>
            <img src={logo} alt="portrait" className='nyu' />
        </CircleWindow>
    );
};

export default Portrait;

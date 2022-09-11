import React from 'react';
import styles from './Portrait.module.scss';
import nyuStyles from '../lib/animations/nyu.module.scss';
import logo from './logo.png';
import CircleWindow from '../lib/components/CircleWindow';

const Portrait: React.FC = () => {
  return (
    <CircleWindow className={styles.portrait}>
      <img src={logo} alt="portrait" className={nyuStyles.nyu} />
    </CircleWindow>
  );
};

export default Portrait;

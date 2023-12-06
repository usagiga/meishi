import React, { FC, PropsWithChildren, useState } from 'react';
import styles from './Portrait.module.scss';
import nyuStyles from '../../../lib/animations/nyu.module.scss';
import logo from '../../../assets/logo.png';
import CircleWindow from '../../../lib/components/CircleWindow';
import SandBagText from '../../../lib/components/SandBagText';

export interface Fave {
  icon: string;
  href: string;
  tooltip: string;
}

interface PortraitProps {
  faves?: Fave[];
  className?: string;
}

const Portrait: FC<PropsWithChildren<PortraitProps>> = (props) => {
  const [nyuStyle, setNyuStyleState] = useState(nyuStyles.nyu);
  const showImage = () => {
    setNyuStyleState(`${nyuStyles.nyu} ${nyuStyles.visible}`);
  };

  const faveLinks = props.faves
    ?.map((fave) => {
      return (
        <a
          href={fave.href}
          target="_blank"
          rel="noreferrer"
          className={styles.tooltip}
        >
          <span className={styles.tooltipText}>{fave.tooltip}</span>
          {fave.icon}
        </a>
      );
    })
    .reduce((prev, curr) => {
      return (
        <>
          {prev} {curr}
        </>
      );
    });

  return (
    <div className={styles.container}>
      <CircleWindow className={`${styles.portrait} ${styles.className}`}>
        <img
          src={logo}
          alt="portrait"
          className={nyuStyle}
          onLoad={showImage}
        />
      </CircleWindow>
      {props.faves && (
        <SandBagText className={styles.fave}>{faveLinks}</SandBagText>
      )}
    </div>
  );
};

export default Portrait;

import React, { FC } from 'react';
import styles from './CircleWindow.module.scss';

type CircleWindowProps = {
  className?: string;
  children?: React.ReactNode;
};

const CircleWindow: FC<CircleWindowProps> = (props) => {
  return (
    <div className={`${styles.circleWindow} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CircleWindow;

import React, { FC } from 'react';
import './CircleWindow.scss';

type CircleWindowProps = {
  className?: string;
  children?: React.ReactNode;
};

const CircleWindow: FC<CircleWindowProps> = (props) => {
  return (
    <div className={'circle-window ' + props.className}>{props.children}</div>
  );
};

export default CircleWindow;

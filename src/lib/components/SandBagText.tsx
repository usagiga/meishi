import React, { FC, PropsWithChildren } from 'react';
import styles from './SandBagText.module.scss';

type SandBagTextProps = {
  className?: string;
};

const SandBagText: FC<PropsWithChildren<SandBagTextProps>> = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SandBagText;

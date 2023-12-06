import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialLink.module.scss';

interface SocialLinkProps {
  icon: IconProp;
  href: string;
  tooltip?: string;
  className?: string;
}

const SocialLink: FC<PropsWithChildren<SocialLinkProps>> = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={props.icon} className={props.className} />
      </span>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={styles.text}
      >
        {props.children}
      </a>
    </div>
  );
};

export default SocialLink;

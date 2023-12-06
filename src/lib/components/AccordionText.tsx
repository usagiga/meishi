import React, { FC, PropsWithChildren, ReactNode, useRef } from 'react';
import styles from './AccordionText.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

interface AccordionTextProps {
  summary: ReactNode;
  className?: string;
}

// reference: https://ics.media/entry/220901/

const closingAnime = (contentElem: HTMLElement, detailsElem: HTMLElement) =>
  gsap.to(contentElem, {
    height: 0,
    opacity: 0,
    duration: 0.2,
    ease: 'power3.out',
    overwrite: true,
    onComplete: () => {
      // アニメーションの完了後にopen属性を取り除く
      detailsElem.removeAttribute('open');
    },
  });

const openingAnime = (contentElem: HTMLElement) =>
  gsap.fromTo(
    contentElem,
    {
      height: 0,
      opacity: 0,
    },
    {
      height: 'auto',
      opacity: 1,
      duration: 0.2,
      ease: 'power3.out',
      overwrite: true,
    },
  );

const AccordionText: FC<PropsWithChildren<AccordionTextProps>> = (props) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const detailsElem = detailsRef.current;
    const contentElem = contentRef.current;

    if (!detailsElem || !contentElem) return;

    event.preventDefault();

    const isOpenedClassName = styles.isOpened;
    if (detailsElem.classList.contains(isOpenedClassName)) {
      detailsElem.classList.toggle(isOpenedClassName);
      closingAnime(contentElem, detailsElem).restart();
    } else {
      detailsElem.classList.toggle(isOpenedClassName);
      detailsElem.setAttribute('open', 'true');
      openingAnime(contentElem).restart();
    }
  };

  return (
    <>
      <details
        ref={detailsRef}
        className={`${styles.detailsContainer} ${props.className}`}
      >
        <summary className={styles.summaryContainer} onClick={toggleAccordion}>
          <span className={styles.summary}>
            {props.summary}
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </span>
        </summary>

        <div ref={contentRef} className={styles.contentContainer}>
          <div className={styles.content}>{props.children}</div>
        </div>
      </details>
    </>
  );
};

export default AccordionText;

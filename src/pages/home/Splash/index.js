import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import Spiro from '/img/spiro_header.svg';
import SplashLeftIllustration from './SplashLeftIllustration';
import SplashRightIllustration from './SplashRightIllustration';

export default function Splash() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SplashLeftIllustration />
        <div className={styles.main}>
          <div className={styles.spiroContainer}>
            <Spiro />
          </div>
          <div className={styles.mainContent}>
            <h1 className={styles.mainText}>Dver</h1>
            <h3 className={styles.subText}>
            Crafting High-Quality Flutter Applications with Expertise.
            </h3>
            <div className={styles.buttonContainer}>
              <a
                href="mailto:coduy96@gmail.com"
                className={styles.button}
              >
                  Get In Touch Today!
              </a>
            </div>
          </div>
          <div className={styles.mainUnderlay} />
        </div>
        <SplashRightIllustration />
      </div>
      <div className={styles.migrationText}>
        💡 Discover Valuable Insights:{' '}
        <Link
          to={useBaseUrl('blog')}
          className={styles.linkText} 
        >
          Click Here!
        </Link>
        .
      </div>
    </section>
  );
}

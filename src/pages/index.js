import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <img alt='Dashify 로고' src='./img/logo.svg' className={styles.logo} />
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--lg' to='/docs/intro'>
            Dashify에 대해 알아보기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description='Minecraft 서버 모니터링을 쉽고 빠르게'>
      <HomepageHeader />
      <hr className={`${styles.divider}`} />
      <main className={`${styles.rightSection}`}>
        <div className={styles.downloadSection}>
          <h1 className={styles.downloadHeader}>다운로드</h1>
          <div className={styles.buttons}>
            <Link className='button button--lg' to='/downloads/launcher'>
              Launcher 다운로드
            </Link>
            <Link className='button button--lg' to='/downloads/client'>
              Client 다운로드
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

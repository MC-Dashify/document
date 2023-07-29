import React from 'react';
import Layout from '@theme/Layout';
import styles from './downloads.module.css';
import Link from '@docusaurus/Link';

export default function Launcher() {
  return (
    <Layout description='Launcher 설치하기'>
      <main className={styles.mainSection}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Launcher 다운로드</h1>
          <h2 className={styles.subheading}>
            서버를 쉽게 열고 관리할 수 있는 프로그램
          </h2>
        </header>
        <Link to={'https://github.com/MC-Dashify/launcher/releases/latest'}>
          <button className={`button ${styles.downloadLatestButton}`}>
            <span>GitHub에서 다운로드하기</span>
          </button>
        </Link>
      </main>
    </Layout>
  );
}

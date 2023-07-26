import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img alt="Dashify 로고" src="./img/logo.svg" className={styles.logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--lg" to="/docs/intro">
            Dashify 사용법 알아보기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <hr className={`${styles.divider}`} />
      <main className={`${styles.rightSection}`}>
        <div className={`${styles.buttons} ${styles.downloadSection}`}>
          <Link className="button button--lg" to="#">
            Launcher 다운로드
          </Link>
          <Link className="button button--lg" to="#">
            Client 다운로드
          </Link>
        </div>
      </main>
    </Layout>
  );
}

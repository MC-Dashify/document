import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './downloads.module.css';
import useOperatingSystem from '../../hooks/os';
import Link from '@docusaurus/Link';
import axios from 'axios';
import SimpleImageSlider from 'react-simple-image-slider';

const operatingSystemList = ['Windows', 'Linux', 'Mac'];

export default function Client() {
  const operatingSystem = useOperatingSystem();
  const isOperatingSystemSupported =
    operatingSystemList.includes(operatingSystem);
  const [isFetched, setIsFetched] = useState(false);
  const [downloadAssets, setDownloadAssets] = useState({});
  const [downloadUrl, setDownloadUrl] = useState('');

  const [imgWidth, setImgWidth] = useState(0);

  const images = [
    { url: '/img/home-screen.png' },
    { url: '/img/create-profile.png' },
    { url: '/img/overview.png' },
    { url: '/img/stats.png' },
    { url: '/img/world-modal.png' },
    { url: '/img/players.png' },
    { url: '/img/console.png' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      let assetsObject = {};
      const fetchData = await axios.get(
        'https://api.github.com/repos/MC-Dashify/client/releases/latest'
      );

      fetchData.data.assets.forEach((asset) => {
        if (asset.name.endsWith('_x64_en-US.msi')) {
          assetsObject['Windows'] = asset.browser_download_url;
        } else if (asset.name.endsWith('aarch64.dmg')) {
          assetsObject['ARM Mac'] = asset.browser_download_url;
        } else if (asset.name.endsWith('x64.dmg')) {
          assetsObject['Intel Mac'] = asset.browser_download_url;
        } else if (asset.name.endsWith('AppImage')) {
          assetsObject['Linux'] = asset.browser_download_url;
        }
      });
      setDownloadAssets(assetsObject);
      setIsFetched(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    Object.entries(downloadAssets).forEach(([key, value]) => {
      if (key === operatingSystem) {
        setDownloadUrl(value);
      }
    });
  }, [operatingSystem, downloadAssets]);

  useEffect(() => {
    if (window.innerWidth >= 996) {
      setImgWidth(996);
    } else {
      setImgWidth(0);
    }
  }, []);

  return (
    <Layout description='Client 설치하기'>
      <main className={styles.mainSection}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Client 다운로드</h1>
          <h2 className={styles.subheading}>
            Dashify를 사용하는 서버를 GUI로 관리 및 모니터링
          </h2>
        </header>
        {!isOperatingSystemSupported ? (
          <>
            <p className={styles.notSupported}>
              죄송합니다. 현재 Dashify Client는 사용중인 운영체제를 지원하지
              않습니다.
            </p>
            <p>
              만약 User Agent를 임의로 바꾸는 프로그램을 사용중이라면 비활성화
              후 다시 시도해 주세요.
            </p>
            <span>또는</span>
            <Link to={'https://github.com/MC-Dashify/client/releases/latest'}>
              <button className={`button ${styles.secondaryDownloadButton}`}>
                <span>다른 플랫폼용으로 GitHub에서 다운로드하기</span>
              </button>
            </Link>
          </>
        ) : isFetched ? (
          <>
            {operatingSystem === 'Mac' ? (
              <>
                <Link to={downloadAssets['Intel Mac']}>
                  <button className={`${styles.downloadLatestButton} button`}>
                    {'Intel Mac용 다운로드'}
                  </button>
                </Link>
                <Link to={downloadAssets['ARM Mac']}>
                  <button className={`${styles.downloadLatestButton} button`}>
                    {'ARM Mac용 다운로드'}
                  </button>
                </Link>
              </>
            ) : (
              <Link to={downloadUrl}>
                <button
                  className={`${styles.downloadLatestButton} button`}
                >{`${operatingSystem}용 다운로드`}</button>
              </Link>
            )}
            <span>또는</span>
            <Link to={'https://github.com/MC-Dashify/client/releases/latest'}>
              <button className={`button ${styles.secondaryDownloadButton}`}>
                <span>다른 플랫폼용으로 GitHub에서 다운로드하기</span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <span>로딩중...</span>
          </>
        )}
        <div className={styles.screenshot}>
          <hr className={`${styles.divider}`} />
          <h1 className={styles.heading}>스크린샷</h1>
          <br />
          <div className={styles.imageSlider}>
            <SimpleImageSlider
              width={imgWidth}
              height={imgWidth * 0.67470238095238}
              images={images}
              showBullets={false}
              showNavs={true}
              loop={true}
              autoPlay={true}
              autoPlayDelay={5}
              navStyle={2}
              slideDuration={0.5}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}

import Head from 'next/head';
import Back from '../components/ipadBack';
import Front from '../components/ipadFront';
import React, { useEffect, useState } from 'react';
import Mobileipad from '../components/mobileipad';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 440) {
        setIsDesktop(true);
    } else {
        setIsDesktop(false);
    }

    const updateMedia = () => {
    if (window.innerWidth > 440) {
        setIsDesktop(true);
    } else {
        setIsDesktop(false);
    }
    };
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
      <>
        <Head>
          <title>iPad</title>
          <meta name="description" content="iPad" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {isDesktop ? (
        <>
          <div style={{ transform: 'scale(0.8)' }}>
            <div style={{ transform: 'translate(170px, -150px)' }}>
              <Back />
            </div>
            <div style={{ transform: 'translate(30px, -566px)' }}>
              <Front />
            </div>
          </div>
        </>
        ):(
        <>
          <Mobileipad />
        </>
        )}
      </>
    );
}

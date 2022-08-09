import Head from 'next/head';
import Back from '../components/ipadBack';
import Front from '../components/ipadFront';

export default function Home() {
  return (
      <>
        <Head>
          <title>iPad</title>
          <meta name="description" content="iPad" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ transform: 'scale(0.8)' }}>
          <div style={{ transform: 'translate(170px, -150px)' }}>
            <Back />
          </div>
          <div style={{ transform: 'translate(30px, -566px)' }}>
            <Front />
          </div>
        </div>
        
      </>
    );
}

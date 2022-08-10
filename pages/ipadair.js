import Head from 'next/head';
import Back from '../components/ipadBack2';
import styles from '../styles/ipad.module.css';
import { useEffect } from 'react';

export default function Air () {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "visible";
        }
    }, []);

    return (
        <>
            <Head>
                <title>iPad Air - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            <div style={{ width: '100vw', height: '100vh', background: 'black', position: 'fixed', zIndex: '-1' }} />
            <div style={{ transform: 'translate(0vh, 43.2vh)' }}>
                <div className={styles.wrapper} style={{ transform: 'scale(4)', position: 'relative', zIndex: '0' }}>
                    <center>
                        <div className={styles.neon_wrapper}>
                            <span className={styles.txt} style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>air</span>
                            <span className={styles.gradient} />
                        </div>
                    </center>
                </div>
                <div style={{ transform: 'translate(50px, 0px) scaleX(2)', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', zIndex: '2', transform: 'translate(219.5px, 2770px)'}}>
                        <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '1', transform: 'translate(-200px, -3070.4px) rotate(-90deg) perspective(1000px) rotateY(80deg) scale(0.7, 0.822)' }}>
                            <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                <Back />
                            </div>
                        </div>
                        <div style={{ width: '490px', height: '20px', border: '1px solid #343d46)', transform: 'translate(-245px, -3304px)', position: 'relative', zIndex: '-1', borderRadius: '0px 0px 10px 10px', background: 'linear-gradient(to right, #a7adba, black)' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

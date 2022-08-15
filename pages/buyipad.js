import Head from 'next/head';
import Flower from '../components/ipad_flower';
import { Grid } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import MobileBuyipad from '../components/mobilebuyipad';

export default function Buy () {
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

    useEffect(() => {
        document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "visible";
        }
    }, []);
    
    return (
        <>
            <Head>
                <title>iPad - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            {isDesktop ? (
            <>
                <div style={{ background: 'black', width: '100%', height: '829px', position: 'relative', zIndex: '0', cursor: 'pointer' }} />
                <Grid style={{ display: 'flex', justifyContent: 'center', transform: 'translate(-891px)' }}>
                    <Grid.Column width={8} style={{ display: 'flex', justifyContent: 'center', marginLeft: '400px', position: 'fixed' }}>
                        <Flower />
                    </Grid.Column>
                </Grid>
            </>
            ):(
            <>
                <MobileBuyipad />
            </>
            )}
        </>
    );
}

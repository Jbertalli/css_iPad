import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Grid } from 'semantic-ui-react';
import Accordion from '../components/ipad_accordion';
import Mobile_Accordion from '../components/mobile_accordion';

export default function Home () {
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
        document.body.style.overflowX = "hidden";
    return () => {
        document.body.style.overflowX = "visible";
        }
    }, []);
    
    return (
        <>
            <Head>
                <title>iPad Accordion - Apple</title>
                <meta name="description" content="apple, ipad" />
            </Head>
            {isDesktop ? (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed' }}>
                    <Grid>
                        <Grid.Column style={{ width: '450px', transform: 'translate(1300px, 4600px) scale(2.7)' }}>
                            <Accordion />
                        </Grid.Column>
                    </Grid>
                </div>
            </>
            ):(
            <>
                <Mobile_Accordion />
            </>
            )}
        </>
    );
}

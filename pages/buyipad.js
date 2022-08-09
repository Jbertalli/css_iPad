import Head from 'next/head';
import Flower from '../components/ipad_flower';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Buy () {

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
            <div>
                <Link href="/ipadair">
                    <div style={{ background: 'black', width: '100%', height: '829px', position: 'relative', zIndex: '0', cursor: 'pointer' }} />
                </Link>
            </div>
            <Grid style={{ display: 'flex', justifyContent: 'center', transform: 'translate(-891px)' }}>
                <Grid.Column width={8} style={{ display: 'flex', justifyContent: 'center', marginLeft: '400px', position: 'fixed' }}>
                    <Flower />
                </Grid.Column>
            </Grid>
        </>
    );
}

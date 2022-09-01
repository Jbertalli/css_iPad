import { useEffect } from 'react';
import Head from 'next/head';
import { Grid } from 'semantic-ui-react';
import Accordion from '../components/ipad_accordion';

export default function Home () {

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
            <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed' }}>
                <Grid>
                    <Grid.Column style={{ width: '450px', transform: 'translate(1300px, 4600px) scale(2.7)' }}>
                        <Accordion />
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}

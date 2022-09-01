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
            <div>
                <Grid style={{ display: 'flex', justifyContent: 'center', transform: 'translate(107px)', position: 'fixed' }}>
                    <Grid.Column style={{ width: '450px', transform: 'translateX(541px)' }}>
                        <Accordion />
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}

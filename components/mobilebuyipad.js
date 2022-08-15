import Flower from '../components/ipad_flower';
import { Grid } from 'semantic-ui-react';
import React, { useEffect } from 'react';

export default function MobileBuyipad () {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "visible";
        }
    }, []);
    
    return (
        <>
            <div style={{ background: 'black', width: '600%', height: '1700px', position: 'relative', zIndex: '0', cursor: 'pointer' }} />
            <Grid style={{  }}>
                <Grid.Column width={8} style={{ transform: 'translate(-790px, -100px) scale(1.8)' }}>
                    <Flower />
                </Grid.Column>
            </Grid>
        </>
    );
}

import { Grid } from 'semantic-ui-react';
import Accordion from '../ipad_accordion';
import { useEffect } from 'react';

export default function Home () {

    useEffect(() => {
        document.body.style.overflowX = "hidden";
    return () => {
        document.body.style.overflowX = "visible";
        }
    }, []);
    
    return (
        <>
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

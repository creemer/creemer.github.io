import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const App = () => {
    return (
        <div className="App">
            <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
                <Grid item xs={6}>
                    <Typography variant={'headline'}>
                        Here will be my personal presentation page.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        Here will be my photo, and maybe carusel
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        Here will be my projects list? maybe with screenshots
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;

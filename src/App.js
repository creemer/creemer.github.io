import React, {Component} from 'react';
import { Grid, Typography } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
                    <Grid item xs={6}>
                        <Typography variant={'headline'}>
                            Here will be Fairy tales generator.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;

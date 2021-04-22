import React from 'react';
import './Slide5.css';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    graphGrid: {
        padding: 0,
        borderRadius: 0,
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        height: 'inherit',
    },

    diagram: {
        height: '40vh',
        borderRadius: '20px',

    },

}));



const Slide5 = () => {
    const slideStyles = useStyles();
    return (
        <div className="Slide5">
            <Grid container direction='row' spacing={5} justify='flex-start' className={slideStyles.graphGrid}>
                <Grid item style={{ fontSize: '25px', width: '40%' }}>
                    <h1> How does it <span style={{ color: 'ORANGE', fontSize: '96px' }}>work?</span> </h1>
                When the Transmission System Operator (TSO) observes a frequency discrepancy, the battery system will activate.
                    However, when the market prices are low and the battery systems are not needed for frequency control,
                    they will instead be utilized to help the consumer and the utility company by lowering the power demand on the power grid.
                    In other words, the RE-vengers battery systems will secure the stability in the power grid and act as a frequency
                    regulator by using advanced power electronics and algorithms to predict the power usage and market prices.
                </Grid>
                <Grid item >
                </Grid>
            </Grid>

        </div>
    )
};

export default Slide5;
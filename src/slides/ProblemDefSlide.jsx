import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import media from '../media';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: 'inherit',
        color: '#ffffff',
        fontFamily: 'Poppins',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
    },

    textItem: {
        width: '70vw',
        border: '10px solid transparent',
        borderImage: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
        borderImageSlice: '1',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '42px',
        display: 'flex',
        textAlign: 'center',
        padding: '5px 0px 5px 0px',
    }

}));



const ProblemDefSlide = () => {
    const slideStyles = useStyles();
    return (
        <div className={slideStyles.root}>
            <Grid container direction='row' className={slideStyles.textItem}>
                <Grid item >
                With increasing growth of the electrical vehicle fleet and renewable energy sources society is struggling with
                inefficient EV battery recycling, electrical power congestion, frequency instability,
                and the high maximum demand tariffs on power consumers.
                </Grid>
            </Grid>
        </div>
    )
};

export default ProblemDefSlide;
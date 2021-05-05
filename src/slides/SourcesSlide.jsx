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
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '42px',
        display: 'flex',
        textAlign: 'center',
        padding: '5px 0px 5px 0px',
        color: 'grey',
        fontStyle: 'italic',
    }

}));



const ProblemDefSlide = () => {
    const slideStyles = useStyles();
    return (
        <div className={slideStyles.root}>
            <Grid container direction='row' className={slideStyles.textItem}>
                <Grid item >
                    &#34;In excess of 60.000 Norwegians has experienced blackout due to falling trees during the night.&#34;
                </Grid>
            </Grid>
        </div>
    )
};

export default ProblemDefSlide;
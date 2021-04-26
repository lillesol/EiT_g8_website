import React from 'react';
import './Slide4.css';
import video from '../media/videos/Video_with_VO.mp4'
import { Grid, makeStyles } from '@material-ui/core';
import media from '../media';


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

    
    imageCity: {
        height: '70vh', 
    }

}));



const Slide4 = () => {
    const slideStyles = useStyles();
    return (
        <div className="Slide4">
            <Grid container direction='row' spacing={8} justify='flex-start' alignItems='center' className={slideStyles.graphGrid}>
                <Grid item xs={6} style={{ fontSize: '25px' }}>
                    <h1> How does it <span style={{ color: 'ORANGE', fontSize: '96px' }}>work?</span> </h1>
                    When the Transmission System Operator (TSO) observes a frequency discrepancy, the battery system will activate.
                    However, when the market prices are low and the battery systems are not needed for frequency control,
                    they will instead be utilized to help the consumer and the utility company by lowering the power demand on the power grid.
                    In other words, the RE-vengers battery systems will secure the stability in the power grid and act as a frequency regulator
                    by using advanced power electronics and algorithms to predict the power usage and market prices.
                </Grid>
                <Grid xs={6} item >
                    <Grid container direction='row' justify='center' alignItems='baseline'>
                        <Grid item>
                        <img className={slideStyles.imageCity} src={media.images.WebsitePictures.city.default} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
};

export default Slide4;
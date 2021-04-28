import React from 'react';
import './Slide1.css';
import { Grid, makeStyles, Box } from '@material-ui/core';
import media from '../media';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundSize: 'cover',
        background: `linear-gradient(0deg, #2F303A 0%, rgba(255, 255, 255, 0) 100%), url(${media.images.MainBackground.default})`,
        fontFamily: 'Poppins',
    },

    graphGrid: {
        padding: 0,
        borderRadius: 50,
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        height: 'auto',
    },

    diagram: {
        height: '60vh',
        
    },

}));

const Slide1 = () => {
    const slideStyles = useStyles();

    return (
        <div className={slideStyles.root}>
            <Grid container direction='row' m={10} justify='flex-end' alignItems='flex-end' className={slideStyles.graphGrid}>
                <Grid container style={{ marginTop: 'auto', marginBottom: 'auto', paddingTop: '5%' }} justify='column' alignItems='baseline'>
                    <Grid item style={{}}>
                        <img src={media.images.WebsitePictures.logo.default} />
                    </Grid>
                    <Grid item style={{ fontSize: '30px' }}>
                        <h1>
                            The RE-Vengers battery pack
                        </h1>
                        Innovation and renewable energy
                    </Grid>
                </Grid>
                <Grid item >
                    <img className={slideStyles.diagram} src={media.images.WebsitePictures.chartSmall.default} />
                </Grid>        
            </Grid>
        </div>
    )
};

export default Slide1;
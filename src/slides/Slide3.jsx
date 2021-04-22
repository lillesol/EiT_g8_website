import React from 'react';
import './Slide3.css';
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
    },

    diagram: {
        height: '50vh',
        borderRadius: '20px',

    },

    image: {
        width: '30vh',
        height: '30vh',
        borderRadius: '200px',
    },

}));



const Slide3 = () => {
    const slideStyles = useStyles();
    return (
        <div className="Slide3">
            <Grid container direction='row' spacing={10} justify='flex-start' alignItems='center' className={slideStyles.graphGrid}>
                <Grid item xs={6} style={{ fontSize: '25px' }}>
                    <h1> The concept of <span style={{ color: 'ORANGE', fontSize: '96px' }}>frequency </span></h1>
                    When power is generated and sold to consumers, it has a certain frequency.
                    In Norway, this frequency is set to 50Hz, but is allowed to fluctuate between 49.9Hz and 50.1Hz.
                    If the frequency fluctuates beyond these limits due to a disturbance in the network (discrepancy),
                    it may cause damage to electrical components connected to the system or cause a blackout.
                    Therefore, it is necessary for Statnett to keep the power frequency at 50Hz.
                </Grid>
                <Grid xs={6} item >
                    <Grid container direction='row' spacing={2} alignItems='center' justify='center'>
                        <Grid item >
                            <img className={slideStyles.image} src={media.images.WebsitePictures.PowerlineLight.default} />
                        </Grid>
                        <Grid item >
                            <img className={slideStyles.image} src={media.images.WebsitePictures.Wave.default} />
                        </Grid>
                        <Grid item >
                            <img className={slideStyles.image} src={media.images.WebsitePictures.LightbulbDark.default} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
};

export default Slide3;
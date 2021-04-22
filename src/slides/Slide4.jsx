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
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        height: 'inherit',
    },

    diagram: {
        height: '40vh',
        borderRadius: '20px',
    },

    imageNight: {
        width: '35vw',
    },

    imageCity: {
        width: '15vw', 
    }

}));



const Slide4 = () => {
    const slideStyles = useStyles();
    return (
        <div className="Slide4">
            <Grid container direction='row' spacing={4} justify='flex-start' className={slideStyles.graphGrid}>
                <Grid item style={{ fontSize: '25px', width: '35%' }}>
                    <h1> Why is it economically <span style={{ color: 'ORANGE', fontSize: '96px' }}>beneficial?</span> </h1>
                    Due to the demand of power varying during the day,
                    utility companies have added a maximum demand tariff for businesses.
                    This results in the businesses being charged extra for the hours with the highest power demand during a month.
                    The RE-vengers battery system is designed to bid on the frequency marked and perform peak shaving.
                </Grid>
                <Grid xs={7} item >
                    <Grid container direction='row' spacing={4} alignItems='stretch' justify='flex-end' >
                        <Grid item >
                            <img className={slideStyles.imageNight} src={media.images.WebsitePictures.Nightsky.default} />
                        </Grid>
                        <Grid item >
                            <img className={slideStyles.imageCity} src={media.images.WebsitePictures.city.default} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
};

export default Slide4;
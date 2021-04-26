import React from 'react';
import './Slide2.css';
import { Grid, makeStyles } from '@material-ui/core';
import media from '../media';


const useStyles = makeStyles((theme) => ({
    graphGrid: {
        paddingTop : '20vh',
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        
    },

    diagram: {
        height: '40vh',
        borderRadius: '20px',

    },

    image: {
        width: '35vh',
        height: '35vh',
    }

}));



const Slide2 = () => {
    const slideStyles = useStyles();
    return (
        <div className="Slide2">
            <Grid container direction='row' spacing={4} justify='flex-start' className={slideStyles.graphGrid}>
                <Grid item xs={4} style={{ fontSize: '30px' }}>
                    <h1> A new  <span style={{ color: 'ORANGE', fontSize: '96px' }}>life</span> </h1>
                    The market for electrical cars is rapidly increasing 
                    and a huge amount of electrical car batteries are produced.
                    The RE-vengers will utilize the end of use batteries, giving them new life.
                    </Grid>
                <Grid xs={7} item style={{ fontSize: '30px' }} >
                    <Grid container justify='flex-end' direction='row'>
                        <Grid item className={slideStyles.image}>
                            <img className={slideStyles.image} src={media.images.WebsitePictures.PowerlineOrg.default} />
                        </Grid>
                        <Grid item className={slideStyles.image}>
                            <img className={slideStyles.image} src={media.images.WebsitePictures.LightbulbLight.default} />
                        </Grid>
                        <Grid item className={slideStyles.image}>
                            <img className={slideStyles.image} src={media.images.WebsitePictures.car.default} />
                        </Grid>
                        <Grid item className={slideStyles.image}>
                            <img className={slideStyles.image} src={media.images.WebsitePictures.battery.default} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            


    </div>
    )
};

export default Slide2;
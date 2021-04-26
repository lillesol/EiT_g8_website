import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import media from '../media';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: 'inherit',
        color: '#ffffff',
        fontFamily: 'Poppins',
    },

    graphGrid: {
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

    quote: {
        margin: '5vh 5vh 5vh 5vh',
        fontStyle: 'italic',
    }

}));



const PowerCongestionSlide = () => {
    const slideStyles = useStyles();
    return (
        <div className={slideStyles.root}>
            <Grid container direction='row' spacing={4} justify='flex-start' className={slideStyles.graphGrid}>
                <h1 style={{ fontSize: '48px' }}> The concept of <span style={{ color: 'ORANGE', fontSize: '96px' }}>power congestion</span> </h1>

                <Grid item xs={6} style={{ fontSize: '30px' }}>
                    Due to the demand and production of power varying during the day, utility companies 
                    risk not being able to provide power at peak consumption hours. They have therefore 
                    added a maximum demand tariff for consumers. 
                    This results in the consumer being charged extra for the hours with the highest 
                    power demand during a month. The “RE-vengers” battery system is designed to
                    perform “peak-shaving” to reduce peak hour consumptiom and utility costs.
                </Grid>
                <Grid xs={6} item style={{ fontSize: '30px', color: 'grey' }} >
                    <Grid container justify='flex-end' direction='column'>
                        <Grid item className={slideStyles.quote}>
                            &#34; Did you know that Norway is the battery capital of Europe? &#34;
                        </Grid>
                        <Grid item className={slideStyles.quote}>
                            &#34; In 2020, 54% of all car sales were electrical cars &#34;
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>



        </div>
    )
};

export default PowerCongestionSlide;
import React, { useState } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',

    },

    IconBox: {
        width: '10%',
        textAlign: 'center',
        background: 'BLACK',
        padding: '5px 5px 5px 5px',
        margin: 'auto',
    },

    TextBox: {
        fontSize: '25px',
        height: '90%',
        textAlign: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        paddingTop:'5%',
        
    },

    graphGrid: {
        padding: 0,
        borderRadius: 0,
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        height: '100vh',
    },

    diagram: {
        height: '40vh',
        borderRadius: '20px',

    },

}));



const InfoBoxSlide = () => {
    var [selectedInfo, setSelectInfo] = useState('none');

    const slideStyles = useStyles();
    return (
        <div className={slideStyles.root}>
            <Grid container direction='column' xs={10} justify='flex-start' className={slideStyles.graphGrid}>
                <Grid item className={slideStyles.TextBox}>
                    <h1><span style={{ color: 'ORANGE', fontSize: '96px' }}>{selectedInfo}</span> </h1>

                    {(selectedInfo === 'none') ? <>
                        Click below for more information</>
                        : (selectedInfo === 'Aquirement of batteries') ?
                            <text> {`The most significant work on battery reuse and recycling is currently being done by the EYDE Cluster – the Norwegian Centre of Expertise (NCE)
                            for Sustainable Process Industry. The cluster consists of regional suppliers and multinational companies that deliver to the global market,
                            as well as research organisations and educational institutions. These are primarily located in Southern Norway, a region with a strong tradition
                            of producing tailor-made materials with a small environmental footprint using renewable energy. “Meanwhile, the value of recycled Li-ion batteries
                            is projected to reach ?USD 700 per metric ton”. The EYDE Cluster is running a cross-sectoral collaborative project called BATMAN
                            (Lithium ion BATteries – Norwegian opportunities within sustainable end-of-life MANagement, reuse and new material streams)`} </text>
                        : (selectedInfo === 'Installation') ?
                            'When you order the “RE-vengers battery system” one of our operators will arrive at the location and install it for free'

                        : (selectedInfo === 'Recycling Methods') ? 'The recyclability of the “RE-vengers battery system” does not change after use'

                        : (selectedInfo === 'Peak Shaving') ?<>
                            To reduce high power tariffs, the RE-venger battery system is equipped with software that can predict power demand peaks of a consumer.
                            When the software detects a demand peak incoming, the battery will discharge and supply the consumer with electric power.
                            The utility company will then detect a much lower consumption peak and the consumer will get a lower maximum demand tariff.</>

                        : (selectedInfo === 'Profitability') ?
                                            'NEED TEXT'
                        : 'none'
                    }








                </Grid>
                
                <Grid container direction='row' justify='center' alignItems='center' spacing={4}>
                        <Grid item onClick={() => setSelectInfo('Aquirement of batteries')} className={slideStyles.IconBox}>
                            Aquirement of batteries
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Installation')} className={slideStyles.IconBox}>
                            Installation
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Recycling Methods')} className={slideStyles.IconBox}>
                            Recycling Methods
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Peak Shaving')} className={slideStyles.IconBox}>
                            Peak Shaving
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Profitability')} className={slideStyles.IconBox}>
                            Profitability
                        </Grid>

                    </Grid>
                
            </Grid>

        </div>
    )
};

export default InfoBoxSlide;
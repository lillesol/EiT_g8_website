import React, { useState } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import media from '../media';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',

    },

    graphGrid: {
        padding: 0,
        borderRadius: 0,
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'WHITE',
        minHeight: '100vh',
    },

    TextBox: {
        fontSize: '25px',
        minHeight: '80vh',
        textAlign: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        paddingTop: '0%',
        width: '80%',

    },

    IconBox: {
        width: '15%',
        height: '15vh',
        textAlign: 'center',
        background: '#202027',
        padding: '5px 5px 5px 5px',
        margin: 'auto',
        borderRadius: '20px',
    },

}));



const InfoBoxSlide = () => {
    var [selectedInfo, setSelectInfo] = useState('');
    const slideStyles = useStyles();

    return (
        <div className={slideStyles.root}>
            <Grid container direction='column' xs={12} justify='center' alignItems='center' className={slideStyles.graphGrid}>
                <Grid item className={slideStyles.TextBox}>
                    <h1><span style={{ color: 'ORANGE', fontSize: '96px' }}>{selectedInfo}</span> </h1>

                    {(selectedInfo === '') ? <div style={{marginTop: '20vh'}}>
                        Click button below for additional information</div>
                        : (selectedInfo === 'Aquirement of batteries') ?
                            <>
                                <div> Since end-of-use electrical vehicle batteries are expensive to recycle the acquirement of
                                batteries comes at a low cost basis. The RE-vengers will make partnerships with recycle
                                centers and vehicle collection facilities.
                                            </div>

                            </>
                            : (selectedInfo === 'Installation') ? <>
                                <Grid container style={{ height: '90%' }} direction='row' justify='flex-start' alignItems='center'>
                                <Grid xs={3} item>
                                    <img style={{height:'40vh'}} src={media.images.InfoBoxImages.BuildingBob.default} />
                                </Grid>
                                <Grid xs={5} style={{margin: '10vh'}} item >
                                    When you order the RE-vengers battery system one of our operators will arrive at the location and install it for <span style={{ color:'orange' }}>free</span> 
                                </Grid>
                            </Grid>
                            </>
                        : (selectedInfo === 'Recycling Methods') ?<>
                                    <img style={{ width: '100%' }} src={media.images.InfoBoxImages.RecyclingMethodDiagram.default} />
                                    <a style={{marginLeft: '60vw' }} href={'https://www.sciencedirect.com/science/article/pii/S2351978919305104?fbclid=IwAR0h_fK0oxWwnMCcs8LsuBxgz71TtYzhtoGVpgQWQK6cqrX2bMQL13ielP0'} >
                            <span style={{ fontSize: '20px', }}>source</span></a>
                            </>               
                        : (selectedInfo === 'Peak Shaving') ?<>
                                To reduce high power tariffs, the RE-venger battery system is equipped with software that can predict power demand peaks of a consumer.
                                When the software detects a demand peak incoming, the battery will discharge and supply the consumer with electric power.
                                The utility company will then detect a much lower consumption peak and the consumer will get a lower maximum demand tariff.
                            </>

                        : (selectedInfo === 'Profitability') ?<>
                                            <img style={{height: '45vh'}} src={media.images.InfoBoxImages.Profitability.default} />
                                            <div>Projected value of an initial investment of 10 million NOK at given discount rates</div>
                                            <div>r = discount rate </div>
                            </>
                        : 'none'
                    }


                </Grid>
                <Grid item>
                    <Grid container xs={12} direction='row' justify='space-between' alignItems='center' spacing={4}>
                        <Grid item onClick={() => setSelectInfo('Aquirement of batteries')} className={slideStyles.IconBox}>
                            <img src={media.images.InfoBoxImages.Icons.AquirementBattery.default} />
                                Aquirement of batteries
                            </Grid>
                        <Grid item onClick={() => setSelectInfo('Installation')} className={slideStyles.IconBox}>
                            <img src={media.images.InfoBoxImages.Icons.Wrench.default}/>
                                Installation
                            </Grid>
                        <Grid item onClick={() => setSelectInfo('Recycling Methods')} className={slideStyles.IconBox}>
                            <img src={media.images.InfoBoxImages.Icons.RecyclingMethod.default} />
                                Recycling Methods
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Peak Shaving')} className={slideStyles.IconBox}>
                            <img src={media.images.InfoBoxImages.Icons.PeakShaving.default} />    
                            <div>Peak Shaving</div>
                        </Grid>
                        <Grid item onClick={() => setSelectInfo('Profitability')} className={slideStyles.IconBox}>
                            <img src={media.images.InfoBoxImages.Icons.Profitability.default} />
                             Profitability
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
};

export default InfoBoxSlide;
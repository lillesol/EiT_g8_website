import React, { useState, useEffect} from 'react';
import './Graphbox.css';

//Checkbow form
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import media from '../media/index';
import { Grid, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        position: 'absolute', left: 'auto', top: 'auto',
        transform: 'translate(-50%, -50%)',
    },

    tickbox: {
        marginRight: '0px',
        paddingRight: '0px',
        padding: '0px 0px 20px 10px' ,
        alignContent: 'right',
        height: '500px',
        borderRadius: 20,
    },

    MuiFormLabel: {
        active: false,
        "&.Mui-focused": {
            color: "white",
        },
        borderRadius: 3,
        border: '5px',
        color: 'white',
        background: '#2F2F32',
        height: '30px',
        padding: '10px 10px 0px 10px',
        boxShadow: '0 3px 5px 2px ORANGE',
        align: 'center',
        margin:'5px auto auto auto',
    },

    MuiFormControlLabel: {
        active: false,
        "&.Mui-focused": {
            color: "white",
        },
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: '30px',
        padding: '10px 10px 0px 10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        align: 'center',
    },

    MuiCheckbox: {
        "&.MuiCheckbox-colorPrimary": {
            color: 'white',
        },
        "&.Mui-checked": {
            color: 'ORANGE',
        },
        color:'white',
        
    },

    graphImg: {
        width:  '40%',
        height: '40%',
        background: 'white', 
        margin: '5px 5px 5px 5px',
    },

    graphImgGroup: {
        width: 'inherit',
        height: 'inherit',
        margin: 0,  
        paddingLeft: '0px',
        marginLeft: 0,
    },

    graphGrid: {
        padding: 0,
        background: '#202027',
        borderRadius: 50,
        opacity: 1,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },

    textfield: {
        marginBottom: '30px',
        padding: '0px 30px 0px 0px',
        backgroundColor: '#fffffff',
        margin: 'auto',
    },

    pricefield: {
        margin: 'auto',
        marginTop: '10px',
        padding: '3px 3px 3px 3px',
        color: '#7FFF00',
        borderStyle: 'solid',
        borderColor: '#2F2F32',

    }



}));


const Graphbox = () => {
    const graphboxStyle = useStyles();
    var [company, setCompany] = useState('Glitre');
    var [profile, setProfile] = useState('CommunityHouse');
    var [battery, setBattery] = useState('Low');
    var [value, setValue] = useState('')


    function getPrice(company, profile, battery) {
        const a = require(`../media/PowerFigures/${company}/${profile}/10kW_30kWh/4596kr saved per year from peak-shaving.txt`)
        
    };


    return (
        <div id="graphbox" classes={graphboxStyle.root}>
      
            <Grid alignItems='center' container spacing={10} direction="row" justify="center" className={graphboxStyle.graphGrid}>


                <Grid container xs={5} direction='column' className={graphboxStyle.tickbox}>

                    <Grid item className={graphboxStyle.textfield}>
                        The top left figure shows your power consumption during the year.
                        The two heat graphs show at what points during the day and week you consume energy.
                        The consumption peak for each month vs. consumption peak for each month with the RE-venger
                        battery pack is shown in the bottom left. This can drastically reduce the power tariff from
                        the utility company.
                    </Grid>

                    <Grid item>
                        <FormControl component="fieldset" >
                            <FormLabel className={graphboxStyle.MuiFormLabel} component="legend">Utility Company</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(company === "Tensio") ? true : false} onChange={() => setCompany('Tensio')} name="Tensio" />}
                                    label="Tensio"
                                />
                                <FormControlLabel 
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(company === "Elvia") ? true : false} onChange={() => setCompany('Elvia')} name="Elvia" />}
                                    label="Elvia"
                                />
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(company === "Glitre") ? true : false} onChange={() => setCompany("Glitre")} name="Glitre" />}
                                    label="Glitre"
                                />
                            </FormGroup>
                        </FormControl >
                        <FormControl component="fieldset">
                            <FormLabel className={graphboxStyle.MuiFormLabel} component="legend">Battery</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(battery === 'High') ? true : false} onChange={() => setBattery('High')} name="300KWh" />}
                                    label="150kW/450kWh"
                                />
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(battery === 'Mid') ? true : false} onChange={() => setBattery('Mid')} name="200KWh" />}
                                    label="40kW/120kWh"
                                />
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(battery === 'Low') ? true : false} onChange={() => setBattery('Low')} name="100KWh" />}
                                    label="10kW/30kWh"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                            <FormLabel className={graphboxStyle.MuiFormLabel} component="legend">Power Profile</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(profile === "Office") ? true : false} onChange={() => setProfile("Office")} name="Office" />}
                                    label="Office"
                                />
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(profile === "Mill") ? true : false} onChange={() => setProfile("Mill")} name="Mill" />}
                                    label="Mill"
                                />
                                <FormControlLabel
                                    control={<Checkbox className={graphboxStyle.MuiCheckbox} checked={(profile === "CommunityHouse") ? true : false} onChange={() => setProfile("CommunityHouse")} name="CommunityHouse" />}
                                    label="Community House"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>

                    <Grid item className={graphboxStyle.pricefield}>
                        {(company === 'Elvia') ?
                            (profile === 'CommunityHouse') ?
                                (battery === 'Low') ? '6480 NOK' :
                                (battery === 'Mid') ? '25920 NOK' :
                                (battery === 'High') ? '95175 NOK' :
                                null 
                             : (profile === 'Mill') ?
                                (battery === 'Low') ? '6480 NOK' :
                                (battery === 'Mid') ? '25920 NOK' :
                                (battery === 'High') ? '96390 NOK' :
                                null
                            : (profile === 'Office') ? 
                                (battery === 'Low') ? '6426 NOK' :
                                (battery === 'Mid') ? '47790 NOK' :
                                (battery === 'High') ? '21989 NOK' :
                                null
                            : null
                        : (company === 'Glitre') ?
                            (profile === 'CommunityHouse') ?
                                (battery === 'Low') ? '4596 NOK' :
                                (battery === 'Mid') ? '18384 NOK' :
                                (battery === 'High') ? '67504 NOK' :
                                null
                            :(profile === 'Mill') ?
                                (battery === 'Low') ? '4596 NOK' :
                                (battery === 'Mid') ? '18384 NOK' :
                                (battery === 'High') ? '68366 NOK' :
                                null
                            :(profile === 'Office') ?
                                (battery === 'Low') ? '4558 NOK' :
                                (battery === 'Mid') ? '15596 NOK' :
                                (battery === 'High') ? '33895 NOK' :
                                null
                            : null
                       : (company === 'Tensio') ?
                            (profile === 'CommunityHouse') ?
                                (battery === 'Low') ? '4920 NOK' :
                                (battery === 'Mid') ? '19680 NOK' :
                                (battery === 'High') ? '72263 NOK' :
                                null
                            : (profile === 'Mill') ?
                                (battery === 'Low') ? '4920 NOK' :
                                (battery === 'Mid') ? '19680 NOK' :
                                (battery === 'High') ? '73185 NOK' :
                                null
                            : (profile === 'Office') ?
                                (battery === 'Low') ? '4879 NOK' :
                                (battery === 'Mid') ? '16695 NOK' :
                                (battery === 'High') ? '36285 NOK' :
                                null
                            : null
                                    : null}
                        <span style={{ color: "white" }}>{', saved per year from peak-shaving'}</span>
                    </Grid>
                    <Grid item className={graphboxStyle.pricefield}>
                        {(battery === 'Low') ? '1830 NOK'
                            : battery === 'Mid' ? '5490 NOK'
                            : battery === 'High' ? '27540 NOK'
                            : null        
                        }
                        <span style={{ color: "white" }}>{', per year from frequency control'}</span>
                    </Grid>
                    



                </Grid>

                <Grid item xs={7} className={graphboxStyle.graphImgGroup} >
                    {(profile === 'CommunityHouse') ? <>
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.CommunityHouse.Low.HeatMMonth.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.CommunityHouse.Low.HeatMWeek.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={
                            (battery === 'Low') ? media.images.Glitre.CommunityHouse.Low.MLPeakShaving.default : (battery === 'Mid') ?
                                media.images.Glitre.CommunityHouse.Mid.MLPeakShaving.default : (battery === 'High') ?
                                    media.images.Glitre.CommunityHouse.High.MLPeakShaving.default : null}
                            alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.CommunityHouse.Low.PowerProfileY.default} alt='graphImg' />
                    </> : (profile === 'Mill') ? <>
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.Mill.Low.HeatMMonth.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.Mill.Low.HeatMWeek.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={
                            (battery === 'Low') ? media.images.Glitre.Mill.Low.MLPeakShaving.default : (battery === 'Mid') ?
                                media.images.Glitre.Mill.Mid.MLPeakShaving.default : (battery === 'High') ?
                                    media.images.Glitre.Mill.High.MLPeakShaving.default : null}
                            alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.Mill.Low.PowerProfileY.default} alt='graphImg' />

                    </> : (profile === 'Office') ? <>
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.Office.Low.HeatMMonth.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.Office.Low.HeatMWeek.default} alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={
                            (battery === 'Low') ? media.images.Glitre.Office.Low.MLPeakShaving.default : (battery === 'Mid') ?
                                media.images.Glitre.Office.Mid.MLPeakShaving.default : (battery === 'High') ?
                                    media.images.Glitre.Office.High.MLPeakShaving.default : null}
                            alt='graphImg' />
                        <img className={graphboxStyle.graphImg} src={media.images.Glitre.CommunityHouse.Low.PowerProfileY.default} alt='graphImg' />

                    </> : null
                    }
                </Grid>

            </Grid>
           
                
            

           
            
    </div>
    )
};



export default Graphbox;
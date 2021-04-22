import React from 'react';
import './Slide1.css';
import { Grid, makeStyles, Box } from '@material-ui/core';
import video from '../media/videos/Video_with_VO.mp4'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: '20vh',
        fontFamily: 'Poppins',
        paddingLeft: '25%',
        padingRight: '0%',
        width: 'auto',
        background:'inherit',
        
    },
}));

const Videoslide = () => {
    const slideStyles = useStyles();

    return (
        <div className={slideStyles.root}>
            <video width="820vh" height="640vh" controls>
                <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
        </div>
    )
};

export default Videoslide;
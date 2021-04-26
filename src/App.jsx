import React from 'react';
import './App.css';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Graphslide from './slides/Graphslide';
import Videoslide from './slides/Videoslide';
import media from './media';
import { makeStyles } from '@material-ui/core';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import InfoBoxSlide from './slides/InfoBoxSlide';
import ProblemDefSlide from './slides/ProblemDefSlide';
import ExpandedDiagramSlide from './slides/ExpandedDiagramSlide';
import PowerCongestionSlide from './slides/PowerCongestionSlide';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#2F303A',
        fontFamily: 'Poppins',
        width: '93%',
        backgroundPositionX: '10%',
        float: 'right',
        backgroundImage: `url(${media.images.StaticBackground.default})`,
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
    },
}));


const App = () => {
    const appStyles = useStyles();
    return (
        <>
        <div className={appStyles.root}>
            <PermanentDrawerLeft />

            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap" rel="stylesheet"/>
            <Slide1 id='top' />
            <ProblemDefSlide id='problemDef' />
            <ExpandedDiagramSlide id='diagram' />
            <Slide2 id='life'/>
            <Videoslide id='video'/>
            <Slide3 id='frequency' />
            <PowerCongestionSlide id='power'/>
            <Slide4 id='work'/>
            <Slide5 />
            <Graphslide id='graph' />
            <InfoBoxSlide id='info'/>
        </div>
        </>
    );
}

export default App;

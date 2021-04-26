import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import media from '../media';


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'inherit',
        color: '#ffffff',
        fontFamily: 'Poppins',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    diagram: {
        marginLeft: '15vw',
        marginRight: 'auto',
        height: '80vh',
    }

}));



const ExpandedDiagramSlide = () => {
    const slideStyles = useStyles();
    return (
        <div className={slideStyles.root}>
            <img className={slideStyles.diagram} src={media.images.ExpandedDiagram.default} />
        </div>
    )
};

export default ExpandedDiagramSlide;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import media from '../media';

const drawerWidth = '10%';

const useStyles = makeStyles((theme) => ({
    root: {
    },

    drawer: {
        display: 'flex',
        width: drawerWidth,
        flexShrink: 0,
        color: 'BLACK',
        overflow: 'hidden',

    },

    listElement: {
        display: 'inline-block',
        textAlign: 'center',

    },

    IconText: {
        color: 'white',
        textAlign: 'inherit',
	},

    drawerPaper: {
        background: '#2F303A',
        width: drawerWidth,
        overflow: 'hidden',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
          <Divider />
          <List style={{ textAlign: 'center' }} >
            {['Main Page', 'Problem Definition', 'New Life', 'Video', 'Frequency', 'Economic Viability', 'Works how?', 'Graphs'].map((text, index) => (
            <ListItem className={classes.listElement} button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <img style={{ width: '80px' }} src={media.images.WebsitePictures.battery.default} />
                      : <img style={{ width: '80px' }} src={media.images.WebsitePictures.car.default} />}
                  </ListItemIcon>
                    <ListItemText className={classes.IconText} style={{ color: 'white', }} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider/>
    </Drawer>    
  );
}
/*
<main className={classes.content}>
    <div className={classes.toolbar} />
    </main>
*/
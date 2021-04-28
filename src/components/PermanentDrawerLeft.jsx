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
import Videoslide from '../slides/Videoslide';

const drawerWidth = '7%';

const windowheight = window.innerHeight-20;

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
        height: '10vh',

    },

    IconText: {
        color: 'white',
        textAlign: 'inherit',
        fontSize: '10em',
    },

    drawerPaper: {
        background: '#2F303A',
        width: drawerWidth,
        overflow: 'hidden',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    scrollfunc: {
        top: '100',
        left: '100',
        behaviour: 'smooth',
    }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
    const imgHeight = '40px'
    const textSize = '0.8em'

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider/>
          <List style={{ textAlign: 'center' }} >
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 0, behavior: 'smooth' })} className={classes.listElement} button key={'Main Page'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight:'auto', height: imgHeight }} src={media.images.Sidebar.icon1.default} />
                  </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Main Page'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 1, behavior: 'smooth' })} className={classes.listElement} button key={'Problem Definition'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon2.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Problem Definition'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 2, behavior: 'smooth' })} className={classes.listElement} button key={'Flow Chart'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon3.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Flow Chart'} />
              </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight*3, behavior: 'smooth' })} className={classes.listElement} button key={'New Life'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon4.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'New Life'} />
              </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 4, behavior: 'smooth' })} className={classes.listElement} button key={'Video'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto', height: imgHeight }} src={media.images.Sidebar.icon10.default} />
                  </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Video'} />
              </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 5, behavior: 'smooth' })} className={classes.listElement} button key={'Frequency'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon5.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Frequency'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 6, behavior: 'smooth' })} className={classes.listElement} button key={'Power congestion'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon6.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Power congestion'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 7, behavior: 'smooth' })} className={classes.listElement} button key={'How it works'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon7.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'How it works'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: windowheight * 9, behavior: 'smooth' })} className={classes.listElement} button key={'Power Analysis'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: imgHeight }} src={media.images.Sidebar.icon8.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Power Analysis'} />
            </ListItem>
              <ListItem onClick={() => window.scrollTo({ top: (windowheight+20) * 10, behavior: 'smooth' })} className={classes.listElement} button key={'Extra'}>
                  <ListItemIcon> <img style={{ marginLeft: 'auto', marginRight: 'auto',  height: '2vh', width: '5vh' }} src={media.images.Sidebar.icon9.default} />
                </ListItemIcon>
                  <ListItemText disableTypography style={{ fontSize: textSize, color: 'white', }} primary={'Extra'} />
            </ListItem>
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
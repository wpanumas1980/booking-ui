import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '1479px',
    height: '1004px',
    background: '#EFEEEC',
    margin: '0 auto'
  },
  leftDetail: {
    width: '585px',
    height: '1004px',
    background: '#46529D'
  },
  roomName: {
    width: '495px',
    height: '135px',
    background: '#2EBAEE',
  },
  menuBar: {
    width: '100%',
    height: '135px',
    background: 'none',
  },
  menu: {
    background: 'none',
    marginBottom: '0',
    borderBottom:'1px solid rgba(0, 0, 0, 0.2)'
  }

}));

export default function RoomBooking() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item >
          <Box className={classes.leftDetail} component="div" display="flex" flexDirection="row-reverse">
            <Box className={classes.roomName} component="div">
              <Typography variant="h2">
                A101
              </Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item xs>
          <Box component="div" className={classes.menuBar} display="flex" flexDirection="column" justifyContent="flex-end">
            <AppBar position="static" elevation={0} className={classes.menu} >
              <Toolbar>
                <Button >This week</Button>
                <Button >NEXT WEEK</Button>
                <Button >WHOLE MONTH</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

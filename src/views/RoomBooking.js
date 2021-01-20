import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Box, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '1479px',
    height: '1004px',
    // background: '#EFEEEC',
    margin: '0 auto'
  },
  leftDetail: {
    width: '585px',
    height: '1004px',
    background: '#46529D'
  },
  leftParagraph: {
    width: '495px',

  },
  roomName: {
    height: '135px',
    background: '#2EBAEE',
    overflow: 'hidden'
  },
  roomLabel: {
    marginTop: '56px',
    marginLeft: '48px',
    color: 'white'
  },
  interval: {
    marginTop: '125px',
    color: 'white'

  },
  dayLabel: {
    marginTop: '58px',
    color: 'white',
    opacity: '0.5'
  },
  dateLabel: {
    marginTop: '15px',
    color: 'white'
  },
  mainBookingDetail: {
    marginTop: '90px',
    color: 'white',
  },
  mainBookingList: {
    marginBottom: '38px'
  },
  menuBar: {
    width: '100%',
    height: '135px',
    background: '#EFEEEC',
  },
  menu: {
    background: 'none',
    marginBottom: '0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
  },
  dateHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '47px',
    background: '#F7F7F7',
    marginTop: '93px',
    paddingLeft: '95px',
    border: '1px solid #ECECEC'
  },
  bookingDetail: {
    display: 'flex',
    marginTop: '50px',
    paddingLeft: '54px',
  },
  subDetail: {
    paddingLeft: '28px',
  }

}));

export default function RoomBooking() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item >
          <Box className={classes.leftDetail} component="div" display="flex" flexDirection="row-reverse">
            <Box className={classes.leftParagraph} component="div">
              <Box className={classes.roomName} component="div">
                <Typography variant="h3" className={classes.roomLabel}>
                  A101
              </Typography>
              </Box>
              <Typography variant="body1" className={classes.interval}>
                Upcoming
                </Typography>
              <Typography variant="h3" className={classes.dayLabel}>
                Monday
                </Typography>
              <Typography variant="h3" className={classes.dateLabel}>
                28 sep 2020
                </Typography>
              <Box component='div' className={classes.mainBookingDetail}>
                <Box component='div' className={classes.mainBookingList}>
                  <Typography variant="body2" style={{ color: 'white', opacity: '0.5' }}>
                    13:00 - 14:00
                </Typography>
                  <Typography variant="subtitle2" >
                    Lunch with Petr
                </Typography>
                </Box>
                <Box component='div'>
                  <Typography variant="body2" style={{ color: 'white', opacity: '0.5' }}>
                    13:00 - 14:00
                </Typography>
                  <Typography variant="subtitle2" >
                    Lunch with Petr
                </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

        </Grid>
        <Grid item xs style={{ color: 'white' }}>
          <Box component="div" className={classes.menuBar} display="flex" flexDirection="column" justifyContent="flex-end">
            <AppBar position="static" elevation={0} className={classes.menu} >
              <Toolbar>
                <Button >This week</Button>
                <Button >NEXT WEEK</Button>
                <Button >WHOLE MONTH</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box component='div'>
            <Box component='div' className={classes.dateHeader}>
              <Typography variant="subtitle1" style={{ color: '#787878' }} >
                Today (Mon, 28 Sep)
              </Typography>
            </Box>
            <Box component='div' className={classes.bookingDetail}>
              <Box component='div' className={classes.marker}>
                <Typography variant="body2" style={{ color: '#3DC7D2' }} >
                  ⬤
                </Typography>
              </Box>
              <Box component='div' className={classes.subDetail}>
                <Typography variant="body2" style={{ color: 'black', opacity: '0.5' }}>
                  13:00 - 14:00
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'black' }}>
                  Lunch with Petr
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component='div'>
            <Box component='div' className={classes.dateHeader}>
              <Typography variant="subtitle1" style={{ color: '#787878' }} >
              Tomorrow (Tue, 29 Sep)
              </Typography>
            </Box>
            <Box component='div' className={classes.bookingDetail}>
              <Box component='div' className={classes.marker}>
                <Typography variant="body2" style={{ color: '#F3814A' }} >
                  ⬤
                </Typography>
              </Box>
              <Box component='div' className={classes.subDetail}>
                <Typography variant="body2" style={{ color: 'black', opacity: '0.5' }}>
                  13:00 - 14:00
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'black' }}>
                  Lunch with Petr
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component='div'>
            <Box component='div' className={classes.dateHeader}>
              <Typography variant="subtitle1" style={{ color: '#787878' }} >
              Tomorrow (Tue, 29 Sep)
              </Typography>
            </Box>
            <Box component='div' className={classes.bookingDetail}>
              <Box component='div' className={classes.marker}>
                <Typography variant="body2" style={{ color: '#F3814A' }} >
                  ⬤
                </Typography>
              </Box>
              <Box component='div' className={classes.subDetail}>
                <Typography variant="body2" style={{ color: 'black', opacity: '0.5' }}>
                  13:00 - 14:00
                </Typography>
                <Typography variant="subtitle2" style={{ color: 'black' }}>
                  Lunch with Petr
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

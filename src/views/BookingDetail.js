import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   width: '1479px',
    //   height: '1004px',
    //   margin: '0 auto'
    // },
    // leftDetail: {
    //   width: '585px',
    //   height: '1004px',
    //   background: '#46529D'
    // },
    // leftParagraph: {
    //   width: '495px',

    // },
    // roomName: {
    //   height: '135px',
    //   background: '#2EBAEE',
    //   overflow: 'hidden'
    // },
    // roomLabel: {
    //   marginTop: '56px',
    //   marginLeft: '48px',
    //   color: 'white'
    // },
    // interval: {
    //   marginTop: '125px',
    //   color: 'white'

    // },
    // dayLabel: {
    //   marginTop: '58px',
    //   color: 'white',
    //   opacity: '0.5'
    // },
    // dateLabel: {
    //   marginTop: '15px',
    //   color: 'white'
    // },
    // mainBookingDetail: {
    //   marginTop: '90px',
    //   color: 'white',
    // },
    // mainBookingList: {
    //   marginBottom: '38px'
    // },
    // menuBar: {
    //   width: '100%',
    //   height: '135px',
    //   background: '#EFEEEC',
    // },
    // menu: {
    //   background: 'none',
    //   marginBottom: '0',
    //   borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
    // },
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

export default function BookingDetail() {
    const classes = useStyles();
    // const param = useParams()
    // const location = useLocation()
    // const searchParams = new URLSearchParams(location.search)
    // console.log(searchParams.get('roomId'), "<==Search")
    // console.log(param, "<==Param");
    // console.log(location, "<==Loacation");
    return (
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
    )
}

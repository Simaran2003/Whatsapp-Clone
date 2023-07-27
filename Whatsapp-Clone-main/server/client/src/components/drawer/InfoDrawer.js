import React from 'react'
import { Drawer, Box, Typography, makeStyles } from '@material-ui/core'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Profile from './Profile';

const useStyles = makeStyles({
     header: {
          background: '#00bfa5',
          height: 135,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          // overflow:'hidden',
          '&>*': {
               marginTop:39,
               padding: 15,
               fontWeight: 'bold',
               fontSize: '1.3rem'
          }
     },
     component: {
          backgroundColor: '#ededed',
          height:'100%',
     }
})

export default function InfoDrawer({ open, setOpen }) {

     const classes = useStyles()

     const handleClose = () => { 
          setOpen(false)
     }

     return (
          <Drawer open={open} onClose={handleClose}> 
               <Box className={classes.header}>
                    <ArrowBackIcon onClick={handleClose} />
                    <Typography>Profile</Typography>
               </Box> 
               <Box className={classes.component}>
                    <Profile />
               </Box>
          </Drawer>
     )
}

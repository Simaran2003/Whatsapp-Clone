import React from 'react';
import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import {AccountContext} from '../../context/AccountProvider';

const useStyles = makeStyles({
     wrapper: {
          background: '#ffffff',
          padding: 5,
          maxWidth: '60%',
          display: 'flex',
          borderRadius: 10,
          width: 'fit-content',
          wordBreak:'break-word'
     },
     text: {
          fontSize: 14,
          padding: '0 25px 0 5px'
     },
     time: {
          fontSize: 10,
          marginTop: "auto",
          marginTop: 6,
          color: '#919191',
          wordBreak:'keep-all'
     },
     own: {
          background: '#dcf8c6',
          padding: 5,
          maxWidth: '60%',
          width: 'fit-content',
          display: 'flex',
          borderRadius: 10,
          wordBreak: 'break-word',
          marginLeft: 'auto',
     }
})

export default function Message({ message }) {
     const classes = useStyles()
     const {account} = useContext(AccountContext)
     const formatDate = (date) => {
          if (date < 10)
               date = '0' + date
          let d = new Date(date)
          let hours = d.getHours()
          let minutes = d.getMinutes()
          return `${hours}:${minutes}`
     }
     return (
          <Box className={account.googleId ===message.sender ? classes.own:classes.wrapper}>
               <Typography className={classes.text}>{message.text}</Typography>
               <Typography className={classes.time}>{formatDate(message.createdAt)}</Typography>
          </Box>
     )
}

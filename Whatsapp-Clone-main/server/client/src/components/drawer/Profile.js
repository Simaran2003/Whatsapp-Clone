import React,{useContext} from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import {AccountContext} from '../../context/AccountProvider'

const useStyles = makeStyles({
     component: {
          overflow:'overlay'
     },
     imgCont: {
          display: 'flex',
          justifyContent: 'center',

     },
     dp: {
          width: 180,
          height: 180,
          borderRadius: '50%',
          padding:'18px 0'
     },
     nameCont: {
          backgroundColor: "#fff",
          padding: '12px 27px 2px',
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          '& :first-child': {
               fontSize: 14,
               color:'#009688',
          },
          '& :last-child': {
               fontSize: 14,
               color: '#4a4a4a',
               margin:'14px 0',
          }
     },
     description: {
          padding: '15px 20px 15px 27px',
          '&>*': {
               fontSize: 12,
               color:'rgba(0,0,0,0.45)',
          }
     }
})

export default function Profile() {
     const classes = useStyles()
     const { account} = useContext(AccountContext)
     return (
		<Box classname={classes.component}>
			<Box className={classes.imgCont}>
				<img
					src={account.imageUrl}
					alt="profile"
					className={classes.dp}
				/>
			</Box>
			<Box className={classes.nameCont}>
				<Typography>Your Name</Typography>
				<Typography>{account.name}</Typography>
			</Box>
			<Box className={classes.description}>
				<Typography>
					This is not your username or pin. This name will be
					visible to your Whatsapp contacts
				</Typography>
			</Box>
			<Box className={classes.nameCont}>
				<Typography>About</Typography>
				<Typography>YOOO</Typography>
			</Box>
		</Box>
	);
}

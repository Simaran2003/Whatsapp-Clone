import React,{useState,useContext} from 'react'
import {MoreVert} from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from '@material-ui/core'

import { GoogleLogout } from 'react-google-login'
import { clientID } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
	menuItem: {
		fontSize: '14px',
		padding: '15px 60px 5px 24px',
		color:'#4A4A4A'
	},
	logout: {
		boxShadow: 'none !important',
		border: 'none !important',
		'&>*': {
			padding:'0px !important',
		}
	}
})

export default function HeaderMenu() {
     const classes = useStyles();
	const { setAccount } = useContext(AccountContext)
	
	const [open, setOpen] = useState(false)
	
	const [openDrawer, setOpenDrawer] = useState(false);
     
     const handleClose = () => { 
          setOpen(false)
     }

     const handleClick = () => {
          setOpen(!open)
	}
	
	const onLogoutSuccess = () => { 
		alert('You have been logged out successfully');
		setAccount(null)
	}

     const toggleDrawer = () => {
		setOpenDrawer(true);
	};
     return (
		<>
			<MoreVert onClick={handleClick} />
			<Menu
				anchorEl={open}
				keepMounted
				open={Boolean(open)}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 50,
					horizontal: 400,
				}}
				getContentAnchorEl={null}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				// className={classes.dialog1}
			>
				<MenuItem
					onClick={()=>{handleClose();toggleDrawer()}}
					className={classes.menuItem}
				>
					Profile
				</MenuItem>
				<MenuItem
					onClick={handleClose}
					className={classes.menuItem}
				>
					<GoogleLogout
						clientId={clientID}
						buttonText="Logout"
						onLogoutSuccess={onLogoutSuccess}
						className={classes.logout}
					></GoogleLogout>
				</MenuItem>
			</Menu>
			<Drawer open={openDrawer} setOpen={setOpenDrawer} />
		</>
	);
}

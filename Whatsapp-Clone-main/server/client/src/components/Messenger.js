import React,{useContext} from 'react'
import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core'
import Login from './account/Login'
import {AccountContext} from '../context/AccountProvider'
import ChatBox from './account/ChatBox'

const useStyles = makeStyles({
	loginHeader: {
		height: 200,
		background: "#00bfa5",
		boxShadow: "none",
	},
	header: {
		height: 115,
		background: "#128c7e",
		boxShadow: "none",
	},
	component: {
		background: "#DCDCDC",
		height: "100vh",
	},
});
export default function Messenger() {
    const classes = useStyles()
    const {account} = useContext(AccountContext)
    return (
        <Box className={classes.component}>
            <AppBar className={account?classes.header:classes.loginHeader}>
                <Toolbar>  
                </Toolbar> 
            </AppBar> 
            {account ? <ChatBox/> : <Login />}
        </Box>
    )
}

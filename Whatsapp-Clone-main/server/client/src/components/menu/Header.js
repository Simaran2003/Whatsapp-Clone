import React,{useContext} from 'react'
import { Box,makeStyles } from '@material-ui/core'
import { Chat } from '@material-ui/icons';
import HeaderMenu from './HeaderMenu';
import { AccountContext } from '../../context/AccountProvider';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
     header: {
          height: '35px',
          background: '#ededed',
          display: 'flex',
          padding: '10px 16px',
          alignItems: 'center',
     },
     avatar: {
          borderRadius: '50%',
          height: '37px',
          width: '37px',

     },
     icons: {
          marginLeft: 'auto',
          '& > *': {
               marginLeft: 2,
               padding: 8,
               color: '#919191'
          },
          '&:first-child': {
               fontSize: 22,
               marginRight: 8,
               marginTop:3
          }
     }
})

export default function Header() {
     const { account } = useContext(AccountContext)
     const classes = useStyles()
     const [open, setOpen] = React.useState(false)
     const toggleDrawer = () => { 
          setOpen(!open)
     }
     return (
          <>
		  <Box className={classes.header}>
               <img src={account.imageUrl} onClick={()=>toggleDrawer()} alt="dp" className={classes.avatar}/>
			<Box className={classes.icons}>
                    <Chat />
                    <HeaderMenu/>
			</Box>
            </Box>
               <Drawer open={open} setOpen={setOpen}/>
          </>
	);
}

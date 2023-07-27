import { Box, Dialog,withStyles,makeStyles } from '@material-ui/core'
import React,{useContext} from 'react'
import Menu from '../menu/Menu'
import ChatWindow from '../chatWindow/ChatWindow'
import { UserContext } from '../../context/UserProvider'
import EmptyChat from '../chatWindow/EmptyChat'

const useStyles = makeStyles({
     component: {
          display: 'flex',
     },
     leftComponent: {
          minWidth:'380px'
     },
     rightComponent: {
          borderLeft: '1px solid rgba(0,0,0,0.14)',
          width: '70%',
          minWidth: 300,
          height: '100%',
     },
})

const style = {
	dialogPaper: {
		height: "95%",
		width: "91%",
		boxShadow: "none",
		borderRadius: 0,
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden",
	},
};

const ChatBox=({classes})=> {
     const class1 = useStyles()
     const {person}=useContext(UserContext)
     return (
          <Dialog
               open={true}
               classes={{ paper: classes.dialogPaper }}
               BackdropProps={{style:{backgroundColor:'unset'}}}
          >
			<Box className={class1.component}>
                    <Box className={class1.leftComponent}>
                         <Menu/>
                    </Box>
                    <Box className={class1.rightComponent}>
                         {
                              Object.keys(person).length !== 0 ? <ChatWindow/> : <EmptyChat/>
                         }
                    </Box>
			</Box>
		</Dialog>
	);
}

export default withStyles(style)(ChatBox);
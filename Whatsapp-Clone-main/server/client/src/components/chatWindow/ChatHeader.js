import {useContext} from 'react'
import { UserContext } from '../../context/UserProvider'
import { Box, Typography, makeStyles } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
     header: {
          display: 'flex',
          height: 35,
          backgroundColor: '#ededed',
          padding: '10px 16px',
     },
     dp: {
          width: 37,
          height: 37,
          borderRadius: '50%',
     },
     name: {
          marginLeft: 10,
          marginTop: -1
     },
     status: {
          marginLeft: 10,
          fontSize: 12,
          color:'rgba(0,0,0,0.6)'
     },
     rightContainer: {
          marginLeft: 'auto',
          '& > *': {
               padding: '6px 10px',
               color: '#919191',
               fontSize: 22,
          }
     }
})

export default function ChatHeader() {
     const { person } = useContext(UserContext)
     const classes=useStyles()
     return (
          <Box className={classes.header}>
               <img src={person.imageUrl} alt='receiver dp' className={classes.dp} />
               <Box>
                    <Typography className={classes.name}>{person.name}</Typography>
                    <Typography className={classes.status}>Offline</Typography>
               </Box>
               <Box className={classes.rightContainer}>
                    <SearchIcon />
                    <MoreVertIcon />
               </Box>
          </Box>
     )
}

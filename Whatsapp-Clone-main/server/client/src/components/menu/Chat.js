import {useContext} from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import {AccountContext} from '../../context/AccountProvider'
import { setConvo } from '../../apis/api'
import { UserContext } from '../../context/UserProvider'

const useStyles = makeStyles({
     component: {
          display: 'flex',
          height: 40,
          padding: '13px 0',
          cursor: 'pointer',
     },
     dp: {
          width: 40,
          height: 40,
          borderRadius: '50%',
          padding:'0 14px'
   }
})

export default function Chat({ user }) {

     const { account } = useContext(AccountContext);
     const { setPerson } = useContext(UserContext);

     const setUser = () => {
          setPerson(user)
          setConvo({senderId:account.googleId,receiverId:user.googleId})
     }
     const classes = useStyles()
     return (
          <Box className={classes.component} onClick={()=>{setUser()}}>
               <Box>
                    <img src={user.imageUrl} alt='dp' className={classes.dp} />
               </Box>
               <Box>
                    <Typography>{user.name}</Typography>
               </Box>
          </Box>
     )
}

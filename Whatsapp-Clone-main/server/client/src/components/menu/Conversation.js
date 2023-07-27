import  { useEffect, useState, useContext } from 'react'
import {Box, makeStyles} from '@material-ui/core'
import { getUsers } from '../../apis/api'
import Chat from './Chat'
import {AccountContext} from '../../context/AccountProvider'

const useStyles = makeStyles({
     component: {
          height: '81vh',
          overflow:'overlay',
     }
})

export default function Conversation({text}) {

     const classes = useStyles()
     const { account } = useContext(AccountContext);
     const [users, setUsers] = useState([]);
     
     useEffect(() => {
          const fetchData = async () => {
               const data = await getUsers()
               const filteredData=data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
               setUsers(filteredData)
          }
          fetchData();
     },[text])

     return (
          <Box className={classes.component}>
               {
                    users.map(user => {
                         if (user.googleId !== account.googleId) {
                              return <Chat user={user} />
                         }
                    })
               }
          </Box>
     )
}

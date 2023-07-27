import {useState,useContext,useEffect} from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@material-ui/core'
import { AccountContext } from '../../context/AccountProvider'
import { UserContext } from '../../context/UserProvider'
import { getConvo } from '../../apis/api'

export default function ChatWindow() {

     const { person } = useContext(UserContext)
     const { account } = useContext(AccountContext)
 
     const [chat,setChat]=useState({})

     useEffect(() => { 
           
          const getConvoDetails = async () => {
               let data = await getConvo({ sender: account.googleId, receiver: person.googleId });
               setChat(data);
               console.log(data);
          }
          getConvoDetails()

     },[person.googleId])

     return (
          <Box>
               <ChatHeader />
               <Messages chat={chat}/>
          </Box>
     )
}

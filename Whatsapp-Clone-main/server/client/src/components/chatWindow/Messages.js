import {useState,useContext} from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Footer from './Footer';
import { AccountContext } from '../../context/AccountProvider';
import { newMsg } from '../../apis/api';
import Message from './Message';

const useStyles = makeStyles({
	wrapper: {
		backgroundImage:
			`url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
          backgroundSize: '50%',
     },
     component: {
          height: '77vh',
     },
     container: {
          padding:'1px 80px'
     }
});

export default function Messages({chat}) {

     const classes = useStyles()
     const [msg, setMsg] = useState()
     const { account } = useContext(AccountContext)
     const sendText = async(e) => {
          if (e.key === 'Enter' && e.target.value !== '') {
          //     console.log(chat);
               let message = {
                    sender:account.googleId,
                    chatId:chat.data.data._id,
                    text:msg
               }
               await newMsg(message)
               setMsg('')
          }}

     return (
          <Box className={classes.wrapper}>
               <Box className={classes.component}>
                    {
                         msg && msg.map(m => {
                              <Box className={classes.container}>
							<Message message={m} />
						</Box>
                         })
                    }
               </Box>
               <Footer sendText={sendText} setMsg={setMsg} msg={msg}/>
          </Box>
     )
}

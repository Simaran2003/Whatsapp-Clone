import React from 'react'
import { useContext } from 'react'
import { Dialog,withStyles,Box,Typography,List, ListItem, makeStyles} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import {AccountContext} from '../../context/AccountProvider'
import { addUser } from '../../apis/api'

const useStyles=makeStyles({
    component:{
        display:'flex',
    },
    leftComponent:{
       padding:'56px 0px 56px 56px',

    },
    qrCode:{
      height:264,
      width:264,
      padding:'50px 0px 0px 50px',
    },
    title:{
        fontSize:"26px",
        marginBottom:"25px",
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300,
    },
    list:{
        '& > *':{
            fontSize:"18px",
            padding:"0px 0px 0px 0px",
            marginTop:"15px",
            lineHeight:"28px",
            color:'#4a4a4a',
        }
    }
})

const style={
    dialogPaper:{
    height:'95%',
    width:'65%',
    marginTop:'12%',
    boxShadow:'none',
    borderRadius:0,
    maxHeight:'100%',
    maxWidth: '100%',
    overflow: 'hidden',
    }
}

const Login = ({classes}) => {
    const class1=useStyles()
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    
    const {account,setAccount} = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        console.log("Login successful",res.profileObj);
        setAccount(res.profileObj)
       await  addUser(res.profileObj)
    }

    const onLoginFailure = () => console.log("Login failed");
    
    return (
		<Dialog
			open={true}
			classes={{ paper: classes.dialogPaper }}
			BackdropProps={{ style: { backgroundColor: "unset" } }}
		>
			<Box className={class1.component}>
				<Box className={class1.leftComponent}>
					<Typography className={class1.title}>
						To use Whatsapp on your computer
					</Typography>
					<List className={class1.list}>
						<ListItem>
							1. Open Whatsapp on your computer
						</ListItem>
						<ListItem>
							2. Tap Menu or Settings and select Linked
							Devices
						</ListItem>
						<ListItem>
							3. Point your phone to this screen to capture
							the code
						</ListItem>
					</List>
				</Box>
				<Box style={{ position: "relative" }}>
					<img
						src={qrurl}
						alt="qr code"
						className={class1.qrCode}
					/>
					<Box
						style={{
							position: "absolute",
							left: "50%",
							top: "50%",
						}}
					>
						<GoogleLogin
							clientId="1082892028021-l0fea27hitvlg5f7l048livj35v43ho9.apps.googleusercontent.com"
							isSignedIn={true}
							onSuccess={onLoginSuccess}
							onFailure={onLoginFailure}
							buttonText=""
							cookiePolicy={"single_host_origin"}
						/>
					</Box>
				</Box>
			</Box>
		</Dialog>
    );
}

export default withStyles(style)(Login)
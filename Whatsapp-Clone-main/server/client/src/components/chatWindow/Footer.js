import React from 'react'
import { Box, makeStyles, InputBase } from '@material-ui/core'
import {EmojiEmotionsOutlined,AttachFile, Mic} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	footer: {
		height: "55px",
		backgroundColor: "#ededed",
		width: "100%",
		display: "flex",
		alignItems: "center",
		padding: "0px 15px",
		"& > *": {
			margin: 5,
			color: "#919191",
		},
	},
	clipIcon: {
		transform: "rotate(40deg)",
		marginTop: -1,
	},
	searchBox: {
		backgroundColor: "#ffffff",
		borderRadius: "30px",
          marginTop: -1,
          width: "82%",
	},
	inputRoot: {
          color: "inherit",
          width: "100%",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
		transition: theme.transitions.create("width"),
          width: "100%",
          fontSize:14,
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function Footer({sendText,setMsg,msg}) {

     const classes = useStyles()
     return (
		<Box className={classes.footer}>
			<EmojiEmotionsOutlined style={{ marginTop: -1 }} />
			<AttachFile className={classes.clipIcon} />
			<Box className={classes.searchBox}>
				<InputBase
					placeholder="Type a message"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ "aria-label": "search" }}
					onKeyPress={(e) => sendText(e)}
					onChange={(e) => setMsg(e.target.value)}
					value={msg}
				/>
			</Box>
			<Mic style={{ marginTop: -1 }} />
		</Box>
	);
}

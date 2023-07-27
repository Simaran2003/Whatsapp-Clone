import React from 'react'
import { Box, makeStyles,InputBase} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	component: {
		backgroundColor: "#f6f6f6",
		paddingTop: 5,
		paddingBottom: 5,
		display: "flex",
		alignItems: "center",
	},
	search: {
		position: "relative",
		borderRadius: 18,
		backgroundColor: "#ffffff",
		width: "100%",
		margin: "0 13px",
		paddingLeft: 3,
		// [theme.breakpoints.up("sm")]: {
		// 	marginLeft: theme.spacing(3),
		// 	width: "auto",
		// },
	},
	searchIcon: {
		padding: theme.spacing(0, 0),
		height: "100%",
		marginLeft: 5,
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		color: "#919191",
	},
	inputRoot: {
		width: "100%",
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: 16,
		marginLeft: 30,
		transition: theme.transitions.create("width"),
		width: "100%",
		fontSize: "14px",
		height: 15,
		// [theme.breakpoints.up("md")]: {
		// 	width: "20ch",
		// },
	},
}));

export default function Search({setText}) {
     const classes=useStyles()
     return (
          <Box className={classes.component}>
		<Box className={classes.search}>
			<Box className={classes.searchIcon}>
				<SearchIcon />
			</Box>
			<InputBase
				placeholder="Search or start new chat"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
				onChange={(e)=>setText(e.target.value)}
			/>
               </Box>
          </Box>
	);
}

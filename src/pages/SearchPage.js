import React from "react"
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';


import SearchArtists from "./SearchArtists"
import SearchTitle from "./SearchTitle"


const font =  "'Montserrat', sans-serif";

const defaultProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
};
const useStyles = makeStyles({
    
text: {
    fontFamily: font,
    fontSize: "30px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold"
  },
  note: {
    color: "#f05945",
    fontSize: "35px"
  },
})

const SearchPage = () => {
    const classes = useStyles();

    return(
        <>
            <Box {...defaultProps} borderLeft={0} borderRight={0} >
            <p className={classes.text}>Search for your favorite song! <MusicNoteIcon className={classes.note} /></p>
            
            </Box>
            <SearchArtists />
            <SearchTitle />
        </>
    )
}
export default SearchPage
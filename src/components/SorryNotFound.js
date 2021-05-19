import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const useStyles = makeStyles({
  paragraph:{
    fontFamily: font,
    fontSize: "20px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
    marginBottom: "40px"
  }
})

const SorryNotFound = () => {
  const classes = useStyles();

  return (
    <>
      <Box {...defaultProps} borderLeft={0} borderRight={0} >
      <p className={classes.paragraph}>Sorry, the song title is not amongst 500 greatest songs...</p>
      </Box>
  </>
  );
};

export default SorryNotFound
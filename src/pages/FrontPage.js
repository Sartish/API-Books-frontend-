import React from "react";
import { CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import front from "./Aretha-front.jpeg"
import header from "./trying.png"

const useStyles = makeStyles({
    paper: {
      textAlign: 'left',
      padding: "20px",
      width: "300px",
      height: "500px",
      margin: "20px",
      backgroundColor: "#fcecdd"
    },
    heading: {
      backgroundColor: "#ffc288",
      borderRadius: "10px",
      padding: "20px",
   
    },
    header: {
      height: "400px",
      width: "300px"
    },
  
    top: {
      backgroundImage: `url(${front})`,
      backgroundRepeat: "no-repeat",
      height: "300px",
      width: "300px",
      margin: "20px"
  
    },
    bottom: {
      backgroundImage: `url(${header})`,
      backgroundRepeat: "no-repeat",
      height: "400px",
      width: "600px",
      margin: "20px"
    },

});

export const FrontPage = () => {
  const classes = useStyles();
  return (
    <Grid
        container
        direction="row"
        alignItems="center"
      >
    <CardActionArea className={classes.top}>
       <Typography
      className={classes.header}
      gutterBottom variant="h5" 
      component="h2">
      </Typography> 
      </CardActionArea> 
      <CardActionArea className={classes.bottom}>
       <Typography
      className={classes.header}
      gutterBottom variant="h5" 
      component="h2">
      </Typography> 
      </CardActionArea> 
      </Grid>
  
  );
};

import React from "react";
import { CardActionArea, Typography, Grid, makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import front from "./Aretha-front.jpeg"
import header from "./small.png"
import banner from "./gold.png"

const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor:  '#a3d2ca',
    backgroundImage: 'none',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'none',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${banner})`,
    },

  },
  top: {
    backgroundImage: `url(${front})`,
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "300px",
    marginLeft: "40px",
    marginTop: "40px",
    // [theme.breakpoints.up('sm')]: {
    //   with: '200px',
    // },
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'none',
      height: "580px"
    },
  },
  bottom: {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    height: "400px",
    width: "350px",
    marginLeft: "40px",
    // [theme.breakpoints.up('sm')]: {
    //   with: '300px',
    // },
    [theme.breakpoints.up('md')]: {
      backgroundImage: 'none',
    },
  },

    // header: {
    //   height: "400px",
    //   width: "300px",
    //   marginLeft: "20px",
    // },

}))

export const FrontPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const showText = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid className={classes.grid}
        container
        direction="row"
        alignItems="center"
      >
       {/* {showText && <Typography variant="h1">Appear when 600px and above</Typography>} */}
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

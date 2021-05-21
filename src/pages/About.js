import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid, Box, Container } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Loader from "../components/Loader"

const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "600px",
    padding: "10px",
    // backgroundColor: "#f05945",
  },
  wrapper: {
    // backgroundColor: '#a3d2ca',
  },
  paper: {
    padding: "40px",
    color: "#686868",
  },
  link: {
    textDecoration: "none"
  },
  text: {
    fontFamily: font,
    fontSize: "35px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
  },
  note: {
    color: "#f05945",
    fontSize: "35px"
  },
  citation: {
      fontStyle: "italic",
      fontFamily: font,
      lineHeight: 1.4,
  },
  article: {
  fontFamily: font,
  lineHeight: 1.4,
  }
})



export const About = () => {
    const classes = useStyles();

  return (

    
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Box {...defaultProps} borderLeft={0} borderRight={0} >
              <p className={classes.text}>Thoughts about the site... <MusicNoteIcon className={classes.note}/> </p>
        </Box>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
        <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <h1>Why this site was created</h1> 
            <p className={classes.article}>When I listen to these songs I reminisce to when I was younger. Sitting in the car with dad driving around with the radio on 🎶. When he heard a song, he recognises he started to sing along, with me daydreaming away in the back seat. Many of the songs got stuck in my head and when I hear them, I feel safe, a sense of melancholy happiness and inspiration.  I created this website to explore the curiosity of some of these old goodies. When where they released, who wrote the songs and what were the thoughts behind creating them?</p>
                <p className={classes.article}>Enjoy😍</p>
            <p className={classes.citation}>"Music does a lot of things for a lot of people. It's transporting, for sure. It can take you right back, years back, to the very moment certain things happened in your life. It's uplifting, it's encouraging, it's strengthening."</p>
                <p>- Aretha Franklin</p>
        </Paper>
      </div>
      </Grid>
    </Container>
  
    </div>
  );
};

export default About 
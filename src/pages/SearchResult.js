import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button, Container} from "@material-ui/core";
import image from "../assets/cd.png"

const font =  "'Montserrat', sans-serif";

const useStyles = makeStyles({
  pages: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      marginLeft: "40px",
      marginRight: "40px",
      color: "#989898",
      fontSize: "20px",
      fontWeight: "bold"
    },
    paper: {
      textAlign: 'left',
      padding: "20px",
      width: "300px",
      height: "470px",
      margin: "20px",
      backgroundColor: "#fcecdd",
      fontFamily: font,
      color: "#404040",
    },
    heading: {
      backgroundColor: "#5eaaa8",
      borderRadius: "10px",
      padding: "20px",
      fontFamily: font,
      color: "#404040",
    },
    header: {
      height: "400px",
      width: "300px"
    },
    span: {
      fontWeight: "bold"
    },
    button: {
    backgroundColor: "lightgrey",
    margin: "5px",
    color: "#f05945",
    fontWeight: "bold",
    fontFamily: font
    },
    link: {
      textDecoration: "none"
    }
})  
// songs as a prop, that will render in the search Artist component 
const SearchResult = ({ songs }) => {
    const classes = useStyles();

    console.log("Songs:", songs)

    return (
    <Container>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
    >
    {songs.map((song) => (
        <Paper className={classes.paper} key={song.id}>
    <CardActionArea>
    <Typography 
        className={classes.heading}
        gutterBottom variant="h5" 
        component="h2">
            {song.title}
        </Typography>
        <CardMedia
        component="img"
        alt="CD image"
        height="80"
        width="80"
        image={image}
        title="CD image"
        />
        <CardContent>
        <Typography 
        gutterBottom variant="h5" 
        component="h2">
            {song.artist}
        </Typography>
        <Typography 
        variant="body2" 
        color="textSecondary" 
        component="p">
            <p><span className={classes.span}>✏️Writers:</span> {song.writers}</p>
            <p><span className={classes.span}>Released:</span> {song.released}</p>
            <p><span className={classes.span}>About the song:</span> {song.description.length > 80 ?
            `${song.description.substring(0, 80)}...` : song.description
                }</p>
        </Typography>
        <Link className={classes.link} to={`/songs/song/${song.id}`} exact>
                <Button className={classes.button}>
                Read more
                </Button>
            </Link>
        </CardContent>
    </CardActionArea>
    </Paper>
    ))}
    </Grid>
</Container>
    )
}

export default SearchResult

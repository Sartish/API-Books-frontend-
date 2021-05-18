import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// import image from "../pages/cd.png"

const useStyles = makeStyles({
  containter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
    flexDirection: "column",
  },
  card: {
    width: "140px",
    margin: "10px",
    padding: "10px",
    height: "200px",
  },
});

const Artist = ({ songs }) => {
  const classes = useStyles();

  return (
    // <Container className={classes.containter} fixed>
    //   {books.map((book) => (
    //     <Link to={`/books/${book.bookID}`} key={book.bookID}>
    //       <Card className={classes.card}>
    //         <p className="book-title">{book.title}</p>
    //         <p className="book-author">{book.authors}</p>
    //       </Card>
    //     </Link>
    //   ))}
    // </Container>
    <>
      <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      >
      {songs.map((song) => (
             <Link className={classes.link} to={`/songs/song/${song.id}`} exact>
             <Card className={classes.card}>
               <p className="book-title">{song.title}</p>
               <p className="book-author">{song.artist}</p>
             </Card>
          </Link>
      //     <Paper className={classes.paper} key={song.id}>
      // <CardActionArea>
      // <Typography 
      //     className={classes.heading}
      //     gutterBottom variant="h5" 
      //     component="h2">
      //       {song.artist}
      //     </Typography>
      //   <CardMedia
      //     component="img"
      //     alt="CD image"
      //     height="140"
      //     image={image}
      //     title="CD image"
      //   />
      //   <CardContent>
      //     <Typography 
      //     gutterBottom variant="h5" 
      //     component="h2">
      //       {song.title}
      //     </Typography>
      //     <Typography 
      //     variant="body2" 
      //     color="textSecondary" 
      //     component="p">
      //       <p>✏️Writers: {song.writers}</p>
      //       <p>Released: {song.released}</p>
      //       <p>{song.description.length > 80 ?
      //         `${song.description.substring(0, 80)}...` : song.description
      //           }</p>
      //     </Typography>
      //     <Link to={`/songs/song/${song.id}`} exact>
      //           <Button className={classes.button}>
      //           Read more
      //           </Button>
      //         </Link>
      //   </CardContent>
      // </CardActionArea>
      // </Paper>
      ))}
  </Grid>
</>
  )
}

export default Artist;

{/* <Paper className={classes.paper} key={song.id}>
<CardActionArea>
<Typography 
    className={classes.heading}
    gutterBottom variant="h5" 
    component="h2">
      {song.artist}
    </Typography>
  <CardMedia
    component="img"
    alt="CD image"
    height="140"
    image={image}
    title="CD image"
  />
  <CardContent>
    <Typography 
    gutterBottom variant="h5" 
    component="h2">
      {song.title}
    </Typography>
    <Typography 
    variant="body2" 
    color="textSecondary" 
    component="p">
      <p>✏️Writers: {song.writers}</p>
      <p>Released: {song.released}</p>
      <p>{song.description.length > 80 ?
        `${song.description.substring(0, 80)}...` : song.description
          }</p>
    </Typography>
    <Link to={`/songs/song/${song.id}`} exact>
          <Button className={classes.button}>
          Read more
          </Button>
        </Link>
  </CardContent>
</CardActionArea>
        </Paper> */}
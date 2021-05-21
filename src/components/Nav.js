import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from "@material-ui/styles";
import HomeIcon from '@material-ui/icons/Home'

const font =  "'Montserrat', sans-serif";

const useStyles = makeStyles({
    menu: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingBottom: "10px",
    color: "#f05945",
    backgroundColor:"#D3D3D3",
    fontFamily: font,
    fontWeight: "bold",
    },
    home: {
    textDecoration: "none",
    fontFamily: font,
    color: "#404040",
    },
    library: {
    textDecoration: "none",
    color: "#404040",
    '&:hover': {
      color: "#f05945",
    }

    },
    chart: {
    textDecoration: "none",
    marginLeft: "25px",
    color: "#404040",
    '&:hover': {
      color: "#f05945",
    }

    },
    about: {
      textDecoration: "none",
      marginLeft: "25px",
      color: "#404040",
      '&:hover': {
        color: "#f05945",
      }
    },
    homeIcon: {
    fontSize: "30px",
    color: "#404040",
    '&:hover': {
      color: "#f05945",
    }
  }

})

export const Nav = () => {
  const classes = useStyles();

     
  return (
    <div className={classes.menu}>
    
        <NavLink className={classes.home} to="/">
        <HomeIcon className={classes.homeIcon} />
        </NavLink>

        <div className={classes.right}>
        <NavLink className={classes.library} to="/songs/search">
        Search
        </NavLink>

        <NavLink className={classes.chart} to="/songs/top-rated">
            Toplist
        </NavLink>

        <NavLink className={classes.about} to="/songs/about">
            About
        </NavLink>
        </div>
    </div>
  )
}
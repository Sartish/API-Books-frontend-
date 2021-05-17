import React from 'react'
import { NavLink } from 'react-router-dom'
// import { FormHelperText, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from '@material-ui/icons/Home'

const font =  "'Montserrat', sans-serif";

const useStyles = makeStyles({
    menu: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px",
      color: "#f05945",
      backgroundColor: "#ffc288",
      fontFamily: font,
      fontSize: "700"
    },
    home: {
    textDecoration: "none",
    color: "#404040",
    fontFamily: font,
    },
    library: {
    textDecoration: "none",
    color: "#404040"
    },
    chart: {
    textDecoration: "none",
    marginLeft: "25px",
    color: "#404040"
    },
    about: {
        textDecoration: "none",
        marginLeft: "25px",
        color: "#404040"
    },
    homeIcon: {
    fontSize: "30px"
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
        <NavLink className={classes.library} to="/songs">
        Search
        </NavLink>

        <NavLink className={classes.chart} to="/songs/top-rated">
            Billboard chart
        </NavLink>

        <NavLink className={classes.about} to="/about">
            About
        </NavLink>
        </div>
{/* 
        <NavLink to="/reviewers-choice">
          About
        </NavLink>
        <NavLink to="/documentation">
          Bookish API Documentation
        </NavLink> */}
    </div>
  )
}
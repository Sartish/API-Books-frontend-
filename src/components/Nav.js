import React from 'react'
import { NavLink } from 'react-router-dom'
// import { FormHelperText, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    menu: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      color: "black",
    //   backgroundColor: "black"
    },
    chart: {
        marginLeft: "10px"
    }

})

export const Nav = () => {
  const classes = useStyles();

     
  return (
    <div className={classes.menu}>
    
        <NavLink to="/">
            Home
        </NavLink>

        <div className={classes.right}>
        <NavLink className={classes.library} to="/songs">
            Library
        </NavLink>

        <NavLink className={classes.chart} to="/songs/top-rated">
            Billboard chart
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
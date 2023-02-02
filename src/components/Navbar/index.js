import React from "react";
import Logo from "../../assets/images/logo.png";

import { AppBar, Button, Toolbar } from "@material-ui/core";

import { Link } from "react-router-dom";

import { useStyles } from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar} color="inherit">
      <div className={classes.brandContainer}>
        <Link to="/">
          <img
            className={classes.image}
            src={Logo}
            alt="memories"
            height="40"
          />
        </Link>
      </div>
      <Link to="/user">
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="primary">
            List user
          </Button>
        </Toolbar>
      </Link>
    </AppBar>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import weed from "../../images/weed.png";
import { Container, AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          The Cannabis Terpene Reference Guide
        </Typography>
        <img className={classes.image} src={weed} alt="weed" height="60" />
      </AppBar>
      <main>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </main>
    </Container>
  );
};

export default Home;

import React from "react";
import Pages from "./components/Pages/Pages";
import Form from "./components/Form/Form";
import weed from "./images/weed.png";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Feed = () => {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          The Cannabis Terpene Reference Guide
        </Typography>
        <img className={classes.image} src={weed} alt="weed" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Pages />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Feed;

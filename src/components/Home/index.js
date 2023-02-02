import React from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import Posts from "../Posts";
import Form from "../Form";

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid
        container
        justify="space-between"
        alignItems="stretch"
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

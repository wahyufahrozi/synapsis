import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

import Form from "./form";
import Users from "./users";

const User = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  // console.log(currentId);
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
          <Users setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;

import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { createPost } from "../../redux/actions/posts";

import { useStyles } from "./styles";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  // console.log(form);

  const clear = () => {
    setForm({ title: "", body: "" });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ ...form }));
    clear();
    // console.log("tersimpan", form);
  };
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Blog</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={form.title}
          onChange={handleChange}
        />
        <TextField
          name="body"
          variant="outlined"
          label="Body"
          fullWidth
          multiline
          rows={4}
          value={form.body}
          onChange={handleChange}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

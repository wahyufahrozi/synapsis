import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { createUser, updatedUser } from "../../redux/actions/users";

import { useStyles } from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  let user = useSelector((state) =>
    currentId ? state.users.users.find((user) => user.id === currentId) : null
  );
  console.log(user);
  // const user = useSelector((state) =>
  //   currentId ? state.users.find((user) => user.id === currentId) : null
  // );
  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const clear = () => {
    setCurrentId(null);
    setForm({ name: "", email: "", gender: "", status: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseStatus = () => {
    setOpenStatus(false);
  };

  const handleOpenStatus = () => {
    setOpenStatus(true);
  };
  //   console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === null) {
      dispatch(createUser({ ...form }));
      clear();
    } else {
      dispatch(updatedUser(currentId, { ...form }));
      clear();
    }
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
        <Typography variant="h6">
          {currentId ? `Editing ${user.name}` : "Creating a User"}
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openStatus}
            onClose={handleCloseStatus}
            onOpen={handleOpenStatus}
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
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

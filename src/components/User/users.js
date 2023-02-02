import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  Slide,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "../../style.css";
import { getUsers, deleteUser } from "../../redux/actions/users";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Users = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  let { users, isLoading } = useSelector((state) => state.users);
  const [searchField, setSearchField] = useState("");
  const numberOfpages = 100 / 10;
  const [openDialog, setOpenDialog] = useState(false);
  const [idUser, setIdUser] = useState();

  function useQuerey() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuerey();
  const page = query.get("page") || 1;
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    if (page) {
      dispatch(getUsers(page));
    }
  }, [dispatch, page]);
  const handleOpenDialog = (user) => {
    setOpenDialog(true);
    setIdUser(user);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleDeleteUser = () => {
    dispatch(deleteUser(idUser));
    setOpenDialog(false);
  };

  const filetereduser = users?.filter((user) =>
    user.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (!users.length && !isLoading) return "No Post";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="container">
      <div>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Yakin ingin menghapus user?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Batal
            </Button>
            <Button onClick={handleDeleteUser} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="searchBox">
        <input
          className="search"
          onChange={handleChange}
          placeholder="Cari user"
        />
      </div>
      {filetereduser?.length !== 0 ? (
        <div className="userTable">
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {filetereduser?.map((user, index) => (
              <tr key={index}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.status}</td>
                <td>
                  <Button
                    size="small"
                    color="secondary"
                    disabled={currentId !== null}
                    onClick={() => handleOpenDialog(user.id)}
                  >
                    <Tooltip title="delete" arrow>
                      <DeleteIcon fontSize="small" />
                    </Tooltip>
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setCurrentId(user.id)}
                  >
                    <Tooltip title="edit" arrow>
                      <EditIcon fontSize="small" />
                    </Tooltip>
                  </Button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <div className="empty-message">
          <h3>Data user tidak ada</h3>
        </div>
      )}

      {filetereduser.length !== 0 ? (
        <div className="pagination">
          <Pagination
            count={numberOfpages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            disabled={searchField.length > 0}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                component={Link}
                to={`/user?page=${item.page}&per_page=20`}
              />
            )}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Users;

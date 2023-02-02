import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./styles";
import { createComment, getComments } from "../../redux/actions/posts";
import { getUser } from "../../redux/actions/users";
import "../../style.css";
const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  let { comments } = useSelector((state) => state.posts);
  let { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getComments());
  }, [dispatch]);

  const commentsRef = useRef();

  //untuk digunakan ketika user comment maka mengarah pada komen terbaru

  const handleComment = async (e) => {
    e.preventDefault();
    let data = {
      id: user.id,
      email: user.email,
      name: user.name,
      post: 16285,
      body: "bla",
    };

    dispatch(createComment(data));

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="comment-components">
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((comment, index) => (
            <Typography key={index} gutterBottom variant="subtitle1">
              <strong>{`${comment.name} :`}</strong>
              {` ${comment.body}`}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Write a Comment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            name="body"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            onClick={handleComment}
            color="primary"
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

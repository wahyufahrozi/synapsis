import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
// import { useDispatch } from "react-redux";
// import { commentPost } from "../../redux/actions/posts";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./styles";
import { createComment, getComments } from "../../redux/actions/posts";
const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  //   const user = JSON.parse(localStorage.getItem("profile"));
  //   const dispatch = useDispatch();
  let { comments } = useSelector((state) => state.posts);

  console.log(comment);
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const commentsRef = useRef();
  console.log(comments);
  //untuk digunakan ketika user comment maka mengarah pada komen terbaru

  const handleComment = async (e) => {
    e.preventDefault();
    dispatch(createComment({ ...comment }));

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //   console.log("coba", comments);
  return (
    <div>
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

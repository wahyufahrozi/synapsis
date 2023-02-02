import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/actions/posts";
import { Paper, CircularProgress, Divider } from "@material-ui/core/";
import CommentSection from "../CommentsSection";
import { useStyles } from "./styles";
const PostDetail = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <div>
      <h2>{post?.title}</h2> <br />
      {post?.body}
      <Divider style={{ margin: "20px 0" }} />
      <CommentSection post={post} />
      <Divider style={{ margin: "20px 0" }} />
    </div>
  );
};

export default PostDetail;

import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import Post from "./Post";

const Posts = () => {
  // const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  let { posts, isLoading } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const classes = useStyles();
  // const baseURL = "https://gorest.co.in/public/v2/posts";
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  // console.log(posts);

  if (!posts.length && !isLoading) return "No Post";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core/";
import "./style.css";
// import { useStyles } from "./styles";
// import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  //   const classes = useStyles();
  return (
    <Card raised elevation={6} className="card">
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="title"
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="description"
          >
            {post.body}
          </Typography>
          <br />
          <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              color="primary"
              component="h2"
              className="description"
            >
              Read More...
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;

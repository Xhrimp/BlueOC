import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "init") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "rejected") return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;

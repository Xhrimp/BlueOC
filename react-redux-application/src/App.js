import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

const App = () => (
  <div>
    <h1>Posts</h1>
    <PostForm />
    <PostList />
  </div>
);

export default App;

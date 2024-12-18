import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get(API_URL);
  return data;
});

export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  const { data } = await axios.post(API_URL, newPost);
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "init",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, { data }) => {
        state.status = "succeeded";
        state.posts = data;
      })
      .addCase(fetchPosts.rejected, (state, { error }) => {
        state.status = "rejected";
        state.error = error.message;
      })
      .addCase(addPost.fulfilled, (state, { data }) => {
        state.posts.push(data);
      });
  },
});

export default postsSlice.reducer;

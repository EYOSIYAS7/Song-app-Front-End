import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsStart,
  deletePostStart,
  createPostStart,
  updatePostStart,
} from "../songsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPostsStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePostStart(id));
  };

  const handleCreate = (title, artist, genre) => {
    dispatch(createPostStart({ title, artist, genre }));
  };

  const handleUpdate = (id, title, artist, genre) => {
    dispatch(updatePostStart({ id, title, artist, genre }));
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.artist}</p>
          <p>{post.genre}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
          <button
            onClick={() =>
              handleUpdate(
                post._id,
                "Updated Title",
                "Updated artist",
                "updated genre"
              )
            }
          >
            Update
          </button>
        </div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(
            e.target.title.value,
            e.target.genre.value,
            e.target.artist.value
          );
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="artist" placeholder="artist" />
        <input type="text" name="genre" placeholder="genre" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostList;

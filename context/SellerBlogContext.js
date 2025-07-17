// context/SellerBlogContext.js
'use client';
import { createContext, useState } from 'react';
import { sellerPosts as initialPosts } from '../data/sellerPosts';

export const SellerBlogContext = createContext();

export const SellerBlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts((prev) => [...prev, { ...newPost, id: Date.now().toString() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <SellerBlogContext.Provider
      value={{ posts, addPost, updatePost, deletePost }}
    >
      {children}
    </SellerBlogContext.Provider>
  );
};
'use client';

import { useContext, useState } from 'react';
import { SellerBlogContext } from '../../context/SellerBlogContext';
import BlogForm from '../../components/BlogForm';
import BlogCard from '../../components/BlogCard';

export default function SellerDashboard() {
  const {
    posts,
    addPost,
    updatePost,
    deletePost
  } = useContext(SellerBlogContext);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (post) => {
    setEditData(post);
    setIsFormOpen(true);
  };

  const handleNew = () => {
    setEditData(null);
    setIsFormOpen(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '26px', fontWeight: 'bold' }}>Seller Blog Dashboard</h1><br/>

      <button 
        onClick={handleNew} 
        style={{ 
          marginBottom: '40px', 
          background: '#4CAF50', 
          color: 'white', 
          padding: '10px', 
          border: 'none', 
          borderRadius: '5px' 
        }}
      >
        Create New Blog
      </button>

      {isFormOpen && (
        <BlogForm
          initialData={editData}
          onCancel={() => setIsFormOpen(false)}
          onSave={(data) => {
            editData ? updatePost(data) : addPost(data);
            setIsFormOpen(false);
          }}
        />
      )}

      <div style={gridStyle}>
        {posts.map(post => (
          <BlogCard
            key={post.id}
            post={post}
            onEdit={() => handleEdit(post)}
            onDelete={() => deletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
}


const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  gap: '0px',
};
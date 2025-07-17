// app/seller-dashboard/[id]/page.js
'use client';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { SellerBlogContext } from '../../../context/SellerBlogContext';

export default function BlogDetailPage() {
  const { id } = useParams();
  const { posts } = useContext(SellerBlogContext);
  const blog = posts.find(post => post.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 28 }}>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: '300px', maxWidth: 600, borderRadius: 8, marginTop: 16 }} />
      <p style={{ marginTop: 20, fontSize: 16 }}>{blog.content}</p>
    </div>
  );
}
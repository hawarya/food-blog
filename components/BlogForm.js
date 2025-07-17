// components/BlogForm.js
'use client';

import { useState, useEffect } from 'react';

export default function BlogForm({ initialData, onCancel, onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      id: initialData?.id || Date.now().toString(),
      title,
      content,
      image
    };
    onSave(blog);
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '10px' }}>{initialData ? 'Edit Blog' : 'Create Blog'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      ></textarea>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <div>
        <button type="submit" style={{ padding: '10px 15px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', marginRight: '10px' }}>Save</button>
        <button type="button" onClick={onCancel} style={{ padding: '10px 15px', background: '#ccc', border: 'none', borderRadius: '5px' }}>Cancel</button>
      </div>
    </form>
  );
}
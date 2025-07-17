'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post, onEdit, onDelete }) {
  return (
    <div style={cardStyle}>
      <Image
        src={post.image}
        alt={post.title}
        width={400}           // Required by next/image
        height={180}          // Matches your imageStyle height
        style={imageStyle}
      />
      <h3 style={titleStyle}>{post.title}</h3>

      <div style={buttonGroup}>
        <Link href={`/seller-dashboard/${post.id}`}>
          <button style={viewBtn}>View</button>
        </Link>
        <button onClick={onEdit} style={editBtn}>Edit</button>
        <button onClick={onDelete} style={deleteBtn}>Delete</button>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '400px',
  minWidth: '280px',
  backgroundColor: '#ffffff',
  border: '1px solid hsla(0, 4%, 11%, 0.10)',
  borderRadius: '8px',
  boxShadow: '1px 3px 12px 4px rgba(6, 4, 4, 0.1)',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  margin: '10px',
  cursor: 'pointer',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '6px',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '10px',
  textAlign: 'center',
};

const buttonGroup = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '12px',
  width: '100%',
};

const viewBtn = {
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  flex: 1,
  fontWeight: 'bold',
};

const editBtn = {
  backgroundColor: '#a1abe9ff',
  color: '#000',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  flex: 1,
  fontWeight: 'bold',
};

const deleteBtn = {
  backgroundColor: '#308080ff',
  color: 'white',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  flex: 1,
  fontWeight: 'bold',
};


'use client';
import foodItems from '../data/foodData';
import { useRouter } from 'next/navigation';

const FoodGrid = () => {
  const router = useRouter();

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      marginTop: '20px'
    }}>
      {foodItems.map((item) => (
        <div key={item.id} style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '15px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
          <h3 style={{ marginTop: '10px', fontSize: '18px', color: '#111' }}>{item.name}</h3>
          <p style={{ color: '#444', fontSize: '16px' }}>₹{item.price}</p>
          <button
            style={{
               cursor: 'pointer',
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#2886a8ff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
              
            }}
            onClick={() => router.push(`/buy/${item.id}`)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodGrid;
// components/FoodCarousel.js
'use client';
import { useState } from 'react';
import foodItems from '../data/foodData';
import { useRouter } from 'next/navigation';

const FoodCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const router = useRouter();

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - visibleCount));
  };

  const handleNext = () => {
    setStartIndex(Math.min(foodItems.length - visibleCount, startIndex + visibleCount));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'hidden' }}>
      <button onClick={handlePrev} disabled={startIndex === 0}>←</button>
      <div style={{ display: 'flex', flexWrap: 'nowrap', overflow: 'hidden', gap: '20px', flex: 1 }}>
        {foodItems.slice(startIndex, startIndex + visibleCount).map((item) => (
          <div key={item.id} style={{ flex: '1 1 0', minWidth: '180px', maxWidth: '220px', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} onClick={() => router.push(`/buy/${item.id}`)}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
            <h4 style={{ marginTop: '10px', color: '#111' }}>{item.name}</h4>
            <p style={{ color: '#444' }}>₹{item.price}</p>
            <button style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#2886a8ff', color: '#fff', border: 'none', borderRadius: '4px',  cursor: 'pointer'}}>Buy</button>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={startIndex + visibleCount >= foodItems.length}>→</button>
    </div>
  );
};

export default FoodCarousel;
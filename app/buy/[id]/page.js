
import foodItems from '../../../data/foodData';

export default function BuyPage({ params }) {
  const food = foodItems.find(item => item.id === params.id);

  if (!food) {
    return <div>Food item not found.</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px' }}>{food.name}</h1><br />

      <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #ddd', marginBottom: '10px' }}>
        <button style={{ border: 'none', backgroundColor: '#000', color: '#fff', padding: '10px', cursor: 'pointer' }}>Order Online</button>
        <button style={{ border: 'none', backgroundColor: 'black', color: 'white', padding: '10px', cursor: 'pointer' }}>Dineout</button>
      </div>

      <div style={{ backgroundColor: '#fef2f2', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        <p>⚠️ Outlet is not accepting orders at the moment. They should be back by <strong>11:00 AM</strong> tomorrow.</p>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', marginBottom: '20px' }}>
        <p><strong>⭐ 3.6 Rating</strong></p>
        <p style={{ color: '#000' }}>South Korean food</p>
        <p style={{ color: '#000' }}>Outlet: Crossing Republic</p>
        <p style={{ color: 'gray' }}>Closed & not delivering</p>
      </div>

      <h3 style={{ fontSize: '20px' }}>Recommended (1)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
        {[...Array(1)].map((_, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <div>
              <h4 style={{ color: '#111' }}>{food.name} {index + 1}</h4>
              <p style={{ color: '#000' }}>₹{food.price}</p>
              <p style={{ fontSize: '12px', color: 'gray' }}>Delicious dish freshly made with selected ingredients and authentic flavor.</p>
            </div>
            <img src={food.image} alt={food.name} style={{ width: '120px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
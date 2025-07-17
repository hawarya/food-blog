'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const { isLoggedIn, login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      router.push(role === 'seller' ? '/seller-dashboard' : '/home');
    }
  }, [isLoggedIn, role, router]); // ✅ added missing dependencies

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && role) {
      login(role);
      router.push(role === 'seller' ? '/seller-dashboard' : '/home');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{
        width: '400px',
        padding: '30px',
        border: '2px solid black',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ textAlign: 'center' }}>Login as {role || '...'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', backgroundColor: '#333', color: '#fff' }}
          />
          <input
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', backgroundColor: '#333', color: '#fff' }}
          />
          <button type="submit" style={{
            padding: '12px',
            fontSize: '16px',
            backgroundColor: '#000',
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

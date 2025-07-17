'use client';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, role, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px 20px', backgroundColor: '#eee' }}>
      {!isLoggedIn ? (
        <>
          <Link href="/login?role=buyer">Buyer Login</Link>
          <Link href="/login?role=seller">Seller Login</Link>
        </>
      ) : (
        <>
          <span>Logged in as {role}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
'use client';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { isLoggedIn, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(role === 'seller' ? '/seller-dashboard' : '/home');
    } else {
      router.push('/login?role=buyer');
    }
  }, [isLoggedIn, role]);

  return null;
}
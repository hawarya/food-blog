'use client';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import FoodCarousel from '../../components/FoodCarousel';
import FoodGrid from '../../components/FoodGrid';

export default function HomePage() {
  const { isLoggedIn, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || role !== 'buyer') {
      router.push('/login?role=buyer');
    }
  }, [isLoggedIn, role]);

  if (!isLoggedIn || role !== 'buyer') return null;

  return (
    <div>
      <h1>Welcome Buyer!</h1>
      <FoodCarousel />
      <FoodGrid />
    </div>
  );
}
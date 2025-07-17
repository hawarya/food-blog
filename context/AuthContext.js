'use client';
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); 
  const router = useRouter();

  const login = (selectedRole) => {
    setIsLoggedIn(true);
    setRole(selectedRole);

  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    router.push('/login?role=buyer');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
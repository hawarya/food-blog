// app/layout.js
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { SellerBlogProvider } from '../context/SellerBlogContext';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <SellerBlogProvider>
            <Navbar />
            {children}
          </SellerBlogProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
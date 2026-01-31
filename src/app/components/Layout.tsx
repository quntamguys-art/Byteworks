import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotButton } from './ChatbotButton';

export function Layout() {
  const location = useLocation();
  
  // Don't show navbar/footer on dashboard pages
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className={!isDashboard ? 'flex-1' : ''}>
        <Outlet />
      </main>
      {!isDashboard && <Footer />}
      {!isDashboard && <ChatbotButton />}
    </div>
  );
}

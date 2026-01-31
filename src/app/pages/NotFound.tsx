import { Link } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-20 h-20 text-gray-400 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          पृष्ठ फेला परेन। The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="w-5 h-5 mr-2" />
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

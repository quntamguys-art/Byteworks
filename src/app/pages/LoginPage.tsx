import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserCircle, Lock, GraduationCap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';

export function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'teacher' | 'student' | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to respective dashboard based on role
    if (selectedRole === 'admin') {
      navigate('/dashboard/admin');
    } else if (selectedRole === 'teacher') {
      navigate('/dashboard/teacher');
    } else if (selectedRole === 'student') {
      navigate('/dashboard/student');
    }
  };

  const roles = [
    {
      id: 'admin' as const,
      title: 'Admin',
      subtitle: 'System Administrator',
      icon: UserCircle,
      color: 'blue',
    },
    {
      id: 'teacher' as const,
      title: 'Teacher',
      subtitle: 'Faculty Member',
      icon: GraduationCap,
      color: 'green',
    },
    {
      id: 'student' as const,
      title: 'Student',
      subtitle: 'Enrolled Student',
      icon: UserCircle,
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">प्रवेश गर्नुहोस्</p>
        </div>

        {!selectedRole ? (
          // Role Selection
          <div>
            <p className="text-center text-gray-600 mb-6">Select your role to continue</p>
            <div className="space-y-4">
              {roles.map((role) => (
                <Card
                  key={role.id}
                  className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        role.color === 'blue'
                          ? 'bg-blue-100 text-blue-600'
                          : role.color === 'green'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{role.title}</h3>
                      <p className="text-sm text-gray-600">{role.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Login Form
          <Card className="p-8">
            <div className="text-center mb-6">
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  selectedRole === 'admin'
                    ? 'bg-blue-100 text-blue-600'
                    : selectedRole === 'teacher'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-purple-100 text-purple-600'
                }`}
              >
                {selectedRole === 'teacher' ? (
                  <GraduationCap className="w-8 h-8" />
                ) : (
                  <UserCircle className="w-8 h-8" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 capitalize">
                {selectedRole} Login
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    className="pl-10"
                    defaultValue={
                      selectedRole === 'admin'
                        ? 'admin'
                        : selectedRole === 'teacher'
                        ? 'teacher1'
                        : 'student1'
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    defaultValue="password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Login
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setSelectedRole(null)}
              >
                Back to Role Selection
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * This is a UI prototype. Login is for demonstration only.
              </p>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}

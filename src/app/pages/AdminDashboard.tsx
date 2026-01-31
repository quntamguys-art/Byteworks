import { useState } from 'react';
import { Users, Trophy, UserPlus, LogOut, LayoutDashboard } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Textarea } from '@/app/components/ui/textarea';
import { useNavigate } from 'react-router';

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<'users' | 'clubs' | 'president'>('users');
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'users' as const, label: 'Manage Users', icon: Users },
    { id: 'clubs' as const, label: 'Create Clubs', icon: Trophy },
    { id: 'president' as const, label: 'Assign President', icon: UserPlus },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <LayoutDashboard className="w-6 h-6 text-blue-600" />
            <h2 className="font-bold text-gray-900">Admin Panel</h2>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeSection === 'users'
                ? 'Manage Users'
                : activeSection === 'clubs'
                ? 'Create Clubs'
                : 'Assign Club President'}
            </h1>
            <p className="text-gray-600 mt-1">
              {activeSection === 'users'
                ? 'Add, edit, or remove users from the system'
                : activeSection === 'clubs'
                ? 'Create and manage college clubs'
                : 'Assign presidents to existing clubs'}
            </p>
          </div>

          {/* Manage Users Section */}
          {activeSection === 'users' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Add New User</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Student</option>
                      <option>Teacher</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Input placeholder="Enter department" />
                  </div>
                </div>
                <Button className="mt-4">Add User</Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User List</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Role</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['John Doe', 'Jane Smith', 'Ram Kumar'].map((name, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{name}</td>
                          <td className="py-3 px-4">{name.toLowerCase().replace(' ', '.')}@college.edu</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                              {idx === 0 ? 'Teacher' : 'Student'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">Edit</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Create Clubs Section */}
          {activeSection === 'clubs' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Create New Club</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Club Name</Label>
                    <Input placeholder="Enter club name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Academic</option>
                      <option>Sports</option>
                      <option>Cultural</option>
                      <option>Technical</option>
                      <option>Social</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Enter club description..." rows={4} />
                  </div>
                </div>
                <Button className="mt-4">Create Club</Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Existing Clubs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Coding Club', 'Dance Club', 'Photography Club', 'Debate Club'].map((club, idx) => (
                    <div key={idx} className="p-4 border rounded-lg hover:bg-gray-50">
                      <h4 className="font-semibold text-gray-900">{club}</h4>
                      <p className="text-sm text-gray-600 mt-1">45 members</p>
                      <Button variant="outline" size="sm" className="mt-2">Manage</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Assign President Section */}
          {activeSection === 'president' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assign Club President</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Club</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Coding Club</option>
                    <option>Dance Club</option>
                    <option>Photography Club</option>
                    <option>Debate Club</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Select Student</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Rajesh Sharma - CS 2024</option>
                    <option>Priya Thapa - BA 2023</option>
                    <option>Ankit Rai - Engineering 2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Term Duration</Label>
                  <Input type="text" placeholder="e.g., 1 Year" />
                </div>
              </div>
              <Button className="mt-4">Assign President</Button>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Current Presidents</h4>
                <div className="space-y-2">
                  {[
                    { club: 'Coding Club', president: 'Rajesh Sharma' },
                    { club: 'Dance Club', president: 'Priya Thapa' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-gray-900">{item.club}</p>
                        <p className="text-sm text-gray-600">President: {item.president}</p>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

import { BookOpen, Upload, FileText, LogOut, GraduationCap } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Textarea } from '@/app/components/ui/textarea';
import { useNavigate } from 'react-router';

export function TeacherDashboard() {
  const navigate = useNavigate();

  const assignedClasses = [
    { name: 'Computer Science 101', students: 45, schedule: 'Mon, Wed, Fri - 9:00 AM' },
    { name: 'Data Structures', students: 38, schedule: 'Tue, Thu - 10:30 AM' },
    { name: 'Database Systems', students: 42, schedule: 'Mon, Wed - 2:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome, Prof. Amit Kumar</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('/login')}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Assigned Classes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assignedClasses.map((cls, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <BookOpen className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{cls.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{cls.students} Students</p>
                <p className="text-sm text-gray-600">{cls.schedule}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Syllabus/Notes */}
          <section>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Upload Materials</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Upload syllabus, lecture notes, or study materials
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Class</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Computer Science 101</option>
                    <option>Data Structures</option>
                    <option>Database Systems</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Material Type</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Syllabus</option>
                    <option>Lecture Notes</option>
                    <option>Assignment</option>
                    <option>Reference Material</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input placeholder="e.g., Chapter 1 - Introduction" />
                </div>

                <div className="space-y-2">
                  <Label>File Upload</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, PPT (Max 10MB)</p>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Upload Material
                </Button>
              </div>
            </Card>

            {/* Recent Uploads */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Uploads</h3>
              <div className="space-y-3">
                {[
                  { name: 'Chapter 3 Notes', date: 'Jan 28, 2026', class: 'CS 101' },
                  { name: 'Assignment 2', date: 'Jan 25, 2026', class: 'Data Structures' },
                  { name: 'Syllabus', date: 'Jan 20, 2026', class: 'Database Systems' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.class} • {item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* What I Taught Today */}
          <section>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Today's Teaching Log</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Record what you taught today for student reference
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Class</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Computer Science 101</option>
                    <option>Data Structures</option>
                    <option>Database Systems</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" defaultValue="2026-01-31" />
                </div>

                <div className="space-y-2">
                  <Label>Topics Covered</Label>
                  <Input placeholder="e.g., Arrays, Loops, Functions" />
                </div>

                <div className="space-y-2">
                  <Label>Detailed Description</Label>
                  <Textarea
                    placeholder="Describe what was taught, key concepts, examples used..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Homework Assigned</Label>
                  <Input placeholder="e.g., Complete exercises 1-5 from textbook" />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Save Teaching Log
                </Button>
              </div>
            </Card>

            {/* Previous Logs */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Teaching Logs</h3>
              <div className="space-y-3">
                {[
                  { date: 'Jan 30', topic: 'Binary Search Trees', class: 'Data Structures' },
                  { date: 'Jan 29', topic: 'SQL Queries', class: 'Database Systems' },
                  { date: 'Jan 27', topic: 'Object-Oriented Programming', class: 'CS 101' },
                ].map((log, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{log.topic}</p>
                        <p className="text-xs text-gray-600">{log.class}</p>
                      </div>
                      <span className="text-xs text-gray-500">{log.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

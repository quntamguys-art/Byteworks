import { BookOpen, Calendar, FileText, Mail, LogOut, User } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';

export function StudentDashboard() {
  const navigate = useNavigate();

  const assignments = [
    { title: 'Data Structures Assignment 2', course: 'Data Structures', dueDate: 'Feb 5, 2026', status: 'pending' },
    { title: 'Database Lab Report', course: 'Database Systems', dueDate: 'Feb 3, 2026', status: 'pending' },
    { title: 'OOP Project Phase 1', course: 'CS 101', dueDate: 'Feb 8, 2026', status: 'submitted' },
  ];

  const schedule = [
    { day: 'Monday', time: '9:00 AM', course: 'Computer Science 101', room: 'Lab 201' },
    { day: 'Monday', time: '2:00 PM', course: 'Database Systems', room: 'Room 305' },
    { day: 'Wednesday', time: '9:00 AM', course: 'Computer Science 101', room: 'Lab 201' },
    { day: 'Tuesday', time: '10:30 AM', course: 'Data Structures', room: 'Room 402' },
  ];

  const notes = [
    { title: 'Chapter 3 - Binary Trees', course: 'Data Structures', date: 'Jan 28, 2026', type: 'Notes' },
    { title: 'SQL Advanced Queries', course: 'Database Systems', date: 'Jan 27, 2026', type: 'Notes' },
    { title: 'Course Syllabus', course: 'CS 101', date: 'Jan 20, 2026', type: 'Syllabus' },
  ];

  const teachers = [
    { name: 'Prof. Amit Kumar', course: 'Computer Science 101', email: 'amit.kumar@college.edu', phone: '+977 98-1234567' },
    { name: 'Dr. Sarah Johnson', course: 'Data Structures', email: 'sarah.j@college.edu', phone: '+977 98-2345678' },
    { name: 'Prof. Rajesh Patel', course: 'Database Systems', email: 'rajesh.p@college.edu', phone: '+977 98-3456789' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <User className="w-8 h-8 text-purple-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome, Rajesh Sharma</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Assignments */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Assignments</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {assignments.map((assignment, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                          <p className="text-sm text-gray-600">{assignment.course}</p>
                          <p className="text-xs text-gray-500 mt-1">Due: {assignment.dueDate}</p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded text-xs font-medium ${
                          assignment.status === 'submitted'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Notes & Syllabus */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notes & Syllabus</h2>
              <Card className="p-6">
                <div className="space-y-3">
                  {notes.map((note, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{note.title}</h3>
                          <p className="text-sm text-gray-600">{note.course}</p>
                          <p className="text-xs text-gray-500 mt-1">{note.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Teacher Contacts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Teachers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teachers.map((teacher, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-sm text-purple-600 mb-4">{teacher.course}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${teacher.email}`} className="text-gray-600 hover:text-purple-600">
                          {teacher.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{teacher.phone}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Class Schedule */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Class Schedule</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">कक्षा तालिका</p>
              <div className="space-y-3">
                {schedule.map((item, idx) => (
                  <div key={idx} className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-semibold text-purple-600">{item.day}</span>
                      <span className="text-xs text-gray-600">{item.time}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.course}</p>
                    <p className="text-xs text-gray-600">{item.room}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Courses</span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Assignments</span>
                  <span className="font-semibold text-orange-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Submitted</span>
                  <span className="font-semibold text-green-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Attendance</span>
                  <span className="font-semibold text-gray-900">92%</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View All Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Full Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Library Access
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

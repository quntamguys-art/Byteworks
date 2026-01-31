import { Mail, Phone, User } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';

export function FacultyPage() {
  const facultyMembers = [
    {
      name: 'Dr. Amit Kumar Sharma',
      department: 'Computer Science',
      email: 'amit.sharma@digitalcollege.edu.np',
      phone: '+977 98-12345678',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Prof. Sita Devi Poudel',
      department: 'Business Administration',
      email: 'sita.poudel@digitalcollege.edu.np',
      phone: '+977 98-23456789',
      image: 'https://i.pravatar.cc/150?img=47',
    },
    {
      name: 'Dr. Ramesh Thapa',
      department: 'Engineering',
      email: 'ramesh.thapa@digitalcollege.edu.np',
      phone: '+977 98-34567890',
      image: 'https://i.pravatar.cc/150?img=33',
    },
    {
      name: 'Ms. Anjali Rai',
      department: 'Mathematics',
      email: 'anjali.rai@digitalcollege.edu.np',
      phone: '+977 98-45678901',
      image: 'https://i.pravatar.cc/150?img=20',
    },
    {
      name: 'Dr. Bikash Shrestha',
      department: 'Physics',
      email: 'bikash.shrestha@digitalcollege.edu.np',
      phone: '+977 98-56789012',
      image: 'https://i.pravatar.cc/150?img=15',
    },
    {
      name: 'Prof. Maya Tamang',
      department: 'English Literature',
      email: 'maya.tamang@digitalcollege.edu.np',
      phone: '+977 98-67890123',
      image: 'https://i.pravatar.cc/150?img=45',
    },
    {
      name: 'Dr. Suresh Adhikari',
      department: 'Economics',
      email: 'suresh.adhikari@digitalcollege.edu.np',
      phone: '+977 98-78901234',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    {
      name: 'Ms. Priya Gurung',
      department: 'Psychology',
      email: 'priya.gurung@digitalcollege.edu.np',
      phone: '+977 98-89012345',
      image: 'https://i.pravatar.cc/150?img=28',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-600">हाम्रा शिक्षकहरू</p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet our dedicated team of experienced educators who are committed to 
            nurturing the next generation of leaders and innovators.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="text-center mb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={faculty.image} alt={faculty.name} />
                  <AvatarFallback>
                    <User className="w-12 h-12 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
                <p className="text-sm text-blue-600 font-medium mt-1">{faculty.department}</p>
              </div>
              
              <div className="space-y-2 border-t pt-4">
                <div className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href={`mailto:${faculty.email}`}
                    className="text-gray-600 hover:text-blue-600 break-all"
                  >
                    {faculty.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{faculty.phone}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Department Info */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Computer Science', 'Business Administration', 'Engineering', 'Mathematics', 
              'Physics', 'English Literature', 'Economics', 'Psychology'].map((dept, idx) => (
              <Card key={idx} className="p-4 text-center hover:bg-blue-50 transition-colors">
                <p className="font-medium text-gray-900">{dept}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

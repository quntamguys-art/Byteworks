import { Trophy, Users, Calendar, Star } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ClubPage() {
  const clubMembers = [
    { name: 'Rajesh Sharma', role: 'President', image: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Priya Thapa', role: 'Vice President', image: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Ankit Rai', role: 'Secretary', image: 'https://i.pravatar.cc/150?img=33' },
    { name: 'Maya Gurung', role: 'Member', image: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Suresh Tamang', role: 'Member', image: 'https://i.pravatar.cc/150?img=15' },
    { name: 'Anjali Rana', role: 'Member', image: 'https://i.pravatar.cc/150?img=45' },
  ];

  const activities = [
    {
      title: 'Hackathon 2026',
      date: 'Feb 15-16, 2026',
      description: '24-hour coding competition with exciting prizes',
      status: 'Upcoming',
    },
    {
      title: 'Web Development Workshop',
      date: 'Feb 5, 2026',
      description: 'Learn React and modern web technologies',
      status: 'Upcoming',
    },
    {
      title: 'Code Review Session',
      date: 'Jan 25, 2026',
      description: 'Weekly peer code review and learning',
      status: 'Completed',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Club Banner */}
        <Card className="overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njk4NDMxODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Coding Club"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-2">Coding Club</h1>
                <p className="text-xl">Code. Create. Collaborate.</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">45</p>
                <p className="text-sm text-gray-600">Members</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Events</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Years Active</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Club */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Club</h2>
              <p className="text-sm text-gray-500 mb-4">क्लब बारे</p>
              <p className="text-gray-600 mb-4">
                The Coding Club is a vibrant community of programming enthusiasts dedicated to 
                learning, sharing, and creating innovative software solutions. We organize 
                workshops, hackathons, and coding competitions to help students enhance their 
                programming skills and stay updated with the latest technologies.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're a beginner or an experienced programmer, our club provides a 
                supportive environment to learn, collaborate, and grow. We focus on practical 
                skills through hands-on projects and real-world applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Programming
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Web Development
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  AI & ML
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                  Hackathons
                </span>
              </div>
            </Card>

            {/* Activities */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Activities & Events</h2>
              <div className="space-y-4">
                {activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          activity.status === 'Upcoming'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Club Members */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Members</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clubMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Avatar>
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    {member.role === 'President' && (
                      <Star className="w-4 h-4 text-yellow-500 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Users className="w-4 h-4 mr-2" />
                View All Members (45)
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Club President */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Club President</h3>
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-3">
                  <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Rajesh Sharma" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-gray-900">Rajesh Sharma</h4>
                <p className="text-sm text-gray-600 mb-3">Computer Science, 2024</p>
                <p className="text-xs text-gray-600 mb-4">
                  "Leading the club to foster innovation and learning in technology"
                </p>
                <Button size="sm" className="w-full">
                  Contact President
                </Button>
              </div>
            </Card>

            {/* Join Club */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="font-semibold text-gray-900 mb-2">Interested?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Join our club and be part of an amazing community of programmers!
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Join Club
              </Button>
            </Card>

            {/* Meeting Schedule */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Meeting Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-600">Every Friday</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Time: 4:00 PM - 6:00 PM</p>
                  <p>Venue: Computer Lab 301</p>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Email: codingclub@college.edu</p>
                <p>Phone: +977 98-7654321</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

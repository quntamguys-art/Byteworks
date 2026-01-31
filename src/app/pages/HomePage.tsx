import { Link } from 'react-router';
import { BookOpen, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'World-class curriculum with modern teaching methods',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced professors dedicated to student success',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Accredited programs recognized globally',
    },
    {
      icon: Globe,
      title: 'Digital Learning',
      description: 'Advanced digital platform for seamless education',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763615834709-cd4b196980db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5ODQzMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="College campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Digital College of Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">
              Empowering Future Leaders Through Digital Innovation
            </p>
            <p className="text-sm text-blue-200 mb-8">भविष्यका नेताहरूलाई सशक्त बनाउँदै</p>
            <Link to="/admission">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwcHJpbmNpcGFsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODQzMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Principal"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Principal's Message</h2>
              <p className="text-sm text-gray-500 mb-4">प्रधानाचार्यको सन्देश</p>
              <p className="text-gray-600 mb-4">
                Welcome to Digital College of Excellence. We are committed to providing 
                world-class education that combines traditional values with modern technology. 
                Our mission is to nurture young minds and prepare them for the challenges of 
                tomorrow.
              </p>
              <p className="text-gray-600 mb-4">
                With our innovative digital learning platform, state-of-the-art facilities, 
                and dedicated faculty, we ensure that every student receives the best possible 
                education and guidance for their future careers.
              </p>
              <p className="font-semibold text-gray-900">Dr. Rajesh Sharma</p>
              <p className="text-sm text-gray-600">Principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-blue-100">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

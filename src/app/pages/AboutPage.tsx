import { Target, Eye, Heart } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">हाम्रो बारेमा</p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Digital College of Excellence
              </h2>
              <p className="text-gray-600 mb-4">
                Established in 2010, Digital College of Excellence has been at the forefront 
                of modern education in Nepal. We blend traditional academic excellence with 
                cutting-edge digital learning technologies to prepare students for the global 
                workforce.
              </p>
              <p className="text-gray-600 mb-4">
                Our campus is equipped with state-of-the-art facilities, including modern 
                laboratories, a comprehensive digital library, smart classrooms, and collaborative 
                learning spaces. We believe in holistic development, offering various clubs, 
                sports activities, and cultural programs.
              </p>
              <p className="text-gray-600">
                With a focus on innovation, critical thinking, and practical skills, we ensure 
                our graduates are ready to excel in their chosen fields and contribute 
                meaningfully to society.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJvb2tzJTIwc3R1ZHl8ZW58MXx8fHwxNzY5ODQzMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="College library"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-sm text-gray-500 mb-4">हाम्रो दृष्टिकोण</p>
              <p className="text-gray-600">
                To become a leading institution of higher education in South Asia, recognized 
                for academic excellence, innovation, and producing graduates who are ethical 
                leaders and problem solvers in a rapidly changing global society.
              </p>
            </Card>

            <Card className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-sm text-gray-500 mb-4">हाम्रो लक्ष्य</p>
              <p className="text-gray-600">
                To provide quality education through innovative teaching methods, foster 
                critical thinking and creativity, promote research and development, and 
                cultivate socially responsible citizens equipped with the skills and knowledge 
                to succeed in the digital age.
              </p>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in education, research, and service.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Embracing new ideas and technologies to enhance learning experiences.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">
                Maintaining honesty, transparency, and ethical conduct in all endeavors.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Calendar, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Textarea } from '@/app/components/ui/textarea';

export function AdmissionPage() {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out the online application form with required documents',
    },
    {
      icon: CheckCircle,
      title: 'Entrance Exam',
      description: 'Appear for the college entrance examination',
    },
    {
      icon: Calendar,
      title: 'Interview',
      description: 'Attend the personal interview with faculty members',
    },
    {
      icon: CheckCircle,
      title: 'Enrollment',
      description: 'Complete enrollment process and begin your journey',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admission</h1>
          <p className="text-xl text-gray-600">भर्ना सम्बन्धी जानकारी</p>
        </div>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => (
              <Card key={idx} className="p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Completed high school education (10+2 or equivalent)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Minimum GPA of 2.5 or equivalent in previous education
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Pass the college entrance examination
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Submit all required documents (transcripts, certificates, ID)
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Application Opens</span>
                  <span className="font-semibold text-gray-900">Feb 1, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Application Deadline</span>
                  <span className="font-semibold text-gray-900">Apr 30, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Entrance Exam</span>
                  <span className="font-semibold text-gray-900">May 15, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Classes Begin</span>
                  <span className="font-semibold text-gray-900">Jun 1, 2026</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <Card className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Online Application Form
            </h2>
            <p className="text-sm text-gray-500 mb-6">अनलाइन आवेदन फारम</p>
            <p className="text-gray-600 mb-6">
              Fill out the form below to start your application process. Our team will 
              contact you within 48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+977 98-12345678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">Desired Program *</Label>
                <select
                  id="program"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a program</option>
                  <option value="cs">Computer Science</option>
                  <option value="ba">Business Administration</option>
                  <option value="eng">Engineering</option>
                  <option value="math">Mathematics</option>
                  <option value="physics">Physics</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your academic background and goals..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Submit Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * This is a UI prototype. Form submission is not functional.
              </p>
            </form>
          </Card>
        </section>

        {/* Scholarship Application Form */}
        <section>
          <Card className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Scholarship Application Form
            </h2>
            <p className="text-sm text-gray-500 mb-6">छात्रवृत्ति आवेदन फारम</p>
            <p className="text-gray-600 mb-6">
              Apply for merit-based or need-based scholarships. Complete this form 
              along with your regular admission application.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="scholarFirstName">First Name *</Label>
                  <Input id="scholarFirstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scholarLastName">Last Name *</Label>
                  <Input id="scholarLastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scholarEmail">Email Address *</Label>
                <Input id="scholarEmail" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scholarPhone">Phone Number *</Label>
                <Input id="scholarPhone" type="tel" placeholder="+977 98-12345678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scholarType">Scholarship Type *</Label>
                <select
                  id="scholarType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select scholarship type</option>
                  <option value="merit">Merit-Based Scholarship</option>
                  <option value="need">Need-Based Scholarship</option>
                  <option value="sports">Sports Scholarship</option>
                  <option value="arts">Arts & Culture Scholarship</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gpa">Previous GPA/Percentage *</Label>
                <Input id="gpa" placeholder="e.g., 3.8 or 85%" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="achievements">Academic Achievements</Label>
                <Textarea
                  id="achievements"
                  placeholder="List your academic achievements, awards, and extracurricular activities..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scholarMessage">Why do you deserve this scholarship?</Label>
                <Textarea
                  id="scholarMessage"
                  placeholder="Explain your financial need or merit qualifications..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Submit Scholarship Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * This is a UI prototype. Form submission is not functional.
              </p>
            </form>
          </Card>
        </section>

        {/* Fee Payment / Wire Transfer Form */}
        <section className="mt-16">
          <Card className="p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Fee Payment / Wire Transfer Form
            </h2>
            <p className="text-sm text-gray-500 mb-6">शुल्क भुक्तानी फारम</p>
            <p className="text-gray-600 mb-6">
              Submit your payment details for admission fees, tuition, or semester fees. 
              Our finance team will verify the transaction within 24-48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="payerFirstName">Student First Name *</Label>
                  <Input id="payerFirstName" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payerLastName">Student Last Name *</Label>
                  <Input id="payerLastName" placeholder="Enter last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID (if enrolled)</Label>
                <Input id="studentId" placeholder="e.g., STU2026001" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentType">Payment Type *</Label>
                <select
                  id="paymentType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select payment type</option>
                  <option value="admission">Admission Fee</option>
                  <option value="tuition">Semester Tuition</option>
                  <option value="examination">Examination Fee</option>
                  <option value="library">Library Fee</option>
                  <option value="other">Other Fees</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (NPR) *</Label>
                  <Input id="amount" type="number" placeholder="e.g., 50000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentDate">Payment Date *</Label>
                  <Input id="paymentDate" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input id="bankName" placeholder="e.g., Nepal Bank Limited" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number *</Label>
                  <Input id="accountNumber" placeholder="Enter account number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID / Reference No. *</Label>
                  <Input id="transactionId" placeholder="e.g., TXN123456789" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <select
                  id="paymentMethod"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select payment method</option>
                  <option value="wire">Wire Transfer / Bank Transfer</option>
                  <option value="online">Online Banking</option>
                  <option value="mobile">Mobile Banking (eSewa, Khalti, etc.)</option>
                  <option value="counter">Bank Counter Deposit</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payerEmail">Contact Email *</Label>
                <Input id="payerEmail" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="payerPhone">Contact Phone *</Label>
                <Input id="payerPhone" type="tel" placeholder="+977 98-12345678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentNotes">Additional Notes</Label>
                <Textarea
                  id="paymentNotes"
                  placeholder="Any additional information about your payment..."
                  rows={3}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <h4 className="font-semibold text-gray-900 mb-2">College Bank Details:</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Bank Name:</strong> Nepal Bank Limited</p>
                  <p><strong>Account Name:</strong> Digital College System</p>
                  <p><strong>Account Number:</strong> 0123456789012345</p>
                  <p><strong>Branch:</strong> Kathmandu Main Branch</p>
                  <p><strong>SWIFT Code:</strong> NEBLNPKA</p>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Submit Payment Information
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-gray-500 text-center">
                * This is a UI prototype. Form submission is not functional.
              </p>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}
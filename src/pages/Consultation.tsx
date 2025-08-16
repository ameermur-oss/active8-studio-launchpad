import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Consultation = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@active8studio.com",
      description: "Send us an email anytime!"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Digital Avenue, Suite 100",
      description: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Friday",
      description: "8:00 AM to 5:00 PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-active8-gray-light to-white">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-active8-neutral" />
              <span className="text-active8-neutral">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold">
              <span className="text-active8-neutral">Active</span>
              <span className="text-active8-green">8</span>
              <span className="text-active8-neutral">Studio</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-active8-neutral">
              Let's Start Your 
              <span className="block text-active8-green">Digital Journey</span>
            </h1>
            <p className="text-xl text-active8-neutral-light max-w-3xl mx-auto">
              Ready to activate your business growth? Fill out the form below and we'll 
              get back to you within 24 hours with a customized strategy for your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="border-none card-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl text-active8-neutral">
                    Get Your Free Consultation
                  </CardTitle>
                  <p className="text-active8-neutral-light">
                    Tell us about your project and goals, and we'll create a custom strategy just for you.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-active8-neutral mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-active8-neutral mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-active8-neutral mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-active8-neutral mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Company Name
                    </label>
                    <Input placeholder="Your Company" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Current Website (if any)
                    </label>
                    <Input placeholder="https://yourwebsite.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      What services are you interested in? *
                    </label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[
                        "SEO Optimization",
                        "Google Ads",
                        "Social Media Marketing",
                        "Web Design",
                        "Content Marketing",
                        "Email Marketing",
                        "Brand Strategy",
                        "Analytics & Reporting"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm text-active8-neutral">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Tell us about your project and goals *
                    </label>
                    <Textarea 
                      placeholder="Describe your business, current challenges, and what you hope to achieve with digital marketing. The more details you provide, the better we can tailor our recommendations."
                      rows={6}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Monthly Marketing Budget Range
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option>Select your budget range</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                  
                  <Button variant="cta" size="xl" className="w-full">
                    Get My Free Strategy Session
                  </Button>

                  <p className="text-sm text-active8-neutral-light text-center">
                    * Required fields. We'll never share your information with third parties.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="border-none card-shadow bg-active8-green text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Quick Response</p>
                        <p className="text-sm text-white/80">We'll contact you within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Strategy Session</p>
                        <p className="text-sm text-white/80">30-minute consultation call</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Custom Proposal</p>
                        <p className="text-sm text-white/80">Tailored plan for your success</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none hover:card-shadow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-active8-neutral mb-1">
                          {info.title}
                        </h3>
                        <p className="text-active8-neutral font-medium mb-1">
                          {info.detail}
                        </p>
                        <p className="text-sm text-active8-neutral-light">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consultation;
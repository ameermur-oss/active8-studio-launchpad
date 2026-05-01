import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="py-20 px-6 bg-active8-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-active8-neutral">
            Ready to Activate Your Growth?
          </h2>
          <p className="text-xl text-active8-neutral-light max-w-3xl mx-auto">
            Let's discuss how we can help transform your digital presence and 
            drive measurable results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-active8-neutral">
                  Get Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-active8-neutral mb-2">
                      Email
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
                    How can we help you?
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and how we can help activate your business growth..."
                    rows={4}
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
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
    </section>
  );
};

export default Contact;
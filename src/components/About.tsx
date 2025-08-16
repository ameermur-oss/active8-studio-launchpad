import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results and ROI for your business."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust and transparency."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of digital trends to keep your brand at the forefront of your industry."
    }
  ];

  const achievements = [
    "Certified Google Partners",
    "Facebook Blueprint Certified",
    "HubSpot Solutions Partner",
    "5-Star Client Satisfaction"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-active8-neutral">
              Why Choose Active8Studio?
            </h2>
            <p className="text-xl text-active8-neutral-light mb-8 leading-relaxed">
              We're not just another digital marketing agency. We're your strategic partners 
              in growth, combining creativity with data-driven insights to activate your 
              business potential and achieve sustainable success.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-active8-neutral">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none card-gradient hover:card-shadow transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-active8-neutral mb-2">
                        {value.title}
                      </h3>
                      <p className="text-active8-neutral-light">
                        {value.description}
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

export default About;
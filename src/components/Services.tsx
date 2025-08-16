import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, BarChart3, PenTool, Share2, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your organic visibility with our data-driven SEO strategies that deliver long-term results and increased traffic.",
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers with our modern design approach.",
    },
    {
      icon: Megaphone,
      title: "Pay-Per-Click Advertising",
      description: "Maximize your ROI with targeted PPC campaigns across Google Ads, Facebook, and other major platforms.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all social media platforms with compelling content.",
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Tell your brand story through strategic content that educates, engages, and converts your target audience.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track performance and optimize campaigns with comprehensive analytics and transparent reporting.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-active8-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-active8-neutral">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-active8-neutral-light max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions designed to activate 
            growth and drive measurable results for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:card-shadow transition-smooth cursor-pointer border-none">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-active8-neutral">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-active8-neutral-light leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
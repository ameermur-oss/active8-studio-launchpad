import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    Services: [
      "SEO Optimization",
      "Web Development",
      "PPC Advertising",
      "Social Media",
      "Content Marketing",
      "Analytics"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Blog",
      "Contact"
    ],
    Resources: [
      "Free Tools",
      "Marketing Guide",
      "Industry Reports",
      "Webinars",
      "Support",
      "FAQ"
    ]
  };

  return (
    <footer className="bg-active8-neutral text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">
              Active8Studio
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Activate your business growth with our comprehensive digital marketing solutions. 
              We're your strategic partners in digital success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-white transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="bg-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/80">
            © 2024 Active8Studio. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
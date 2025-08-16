import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/13ff8226-36ed-4d69-80a2-a79592abcb57.png" 
              alt="Active8Studio Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>
          
          <Button variant="cta" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
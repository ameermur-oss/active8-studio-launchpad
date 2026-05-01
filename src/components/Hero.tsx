import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Activate Your 
              <span className="block text-white/90">Digital Growth</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We're Active8Studio - a full-service digital marketing agency that transforms 
              businesses through strategic online marketing, innovative web design, and 
              data-driven campaigns that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="/consultation">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="card-gradient rounded-2xl p-8 card-shadow">
              <div className="aspect-video rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0"
                  title="Digital Marketing Growth"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <p className="text-white/90 text-lg font-medium">Watch Your Business Grow</p>
                <p className="text-white/70 text-sm">See how digital marketing transforms businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
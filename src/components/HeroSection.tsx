
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Revolutionary Solar Technology
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Solar Energy.
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Simplified.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your home with plug-and-play solar kits that require no installation, no permits, and no hassle. Clean energy has never been this simple.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-20 animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Solar Kit"
            className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

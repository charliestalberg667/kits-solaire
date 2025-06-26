
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, User, Home } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <User className="w-4 h-4" />
            DIY Friendly - No Electrician Needed
          </div>

          {/* Social Proof - Reviews */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 text-sm">4.8/5 from 1,247 DIY homeowners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Solar Power
            <br />
            <span className="font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Anyone Can Install
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Simply plug into any wall outlet and start saving immediately. No tools, no permits, no professional installation required.
          </p>

          {/* Simple Steps */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">1</div>
              <span>Unbox</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">2</div>
              <span>Plug In</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">3</div>
              <span>Start Saving</span>
            </div>
          </div>

          {/* Urgency & Scarcity */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-red-800 font-medium">⚡ Perfect for renters, homeowners, and anyone who wants solar without the hassle</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Start Your DIY Solar Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              See How Simple It Is
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-green-500" />
              <span>Apartment & Renter Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Roof Modifications</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Plug & Play Design</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
            alt="SolarKit plug and play solar panel installation showing easy 5-minute setup"
            className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

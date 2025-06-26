
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Start Saving Today
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 10,000+ homeowners who've already cut their electricity bills in half with SolarKit.
        </p>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10,000+</div>
            <div className="text-blue-100 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$2.4M</div>
            <div className="text-blue-100 text-sm">Total Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4.8★</div>
            <div className="text-blue-100 text-sm">Customer Rating</div>
          </div>
        </div>

        {/* Guarantee points */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>30-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>10-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Free Shipping</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5 mr-2" />
            Get Free Quote Now
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
            <Phone className="w-5 h-5 mr-2" />
            Call (800) SOLAR-KIT
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          📞 Speak with a solar expert in under 60 seconds
        </p>
      </div>
    </section>
  );
};

export default CTASection;


import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Ready to go solar?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of homeowners who have already made the switch to clean, affordable energy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5 mr-2" />
            Get Quote
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
            Contact Sales
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

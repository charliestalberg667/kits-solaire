
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProductShowcase = () => {
  const benefits = [
    "No installation required",
    "Works with any outlet",
    "Starts generating power immediately",
    "Mobile app monitoring",
    "Weather-resistant design",
    "10-year warranty"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Solar power that
              <span className="font-medium text-green-600"> just works</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our revolutionary plug-and-play solar kits bring clean energy to your home without the complexity of traditional solar installations.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Solar Technology"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

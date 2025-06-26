
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Solar power that
              <span className="font-medium text-green-600"> just works</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our revolutionary plug-and-play solar kits bring clean energy to your home without the complexity of traditional solar installations.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Solar Panel Close-up"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400&h=200"
                  alt="Solar Installation"
                  className="rounded-2xl shadow-lg w-full h-32 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=200"
                  alt="Solar Kit Components"
                  className="rounded-2xl shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Solar Technology"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

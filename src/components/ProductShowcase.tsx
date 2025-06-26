
import { Button } from "@/components/ui/button";
import { Check, User, Home, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const ProductShowcase = () => {
  const benefits = [
    "No electrician required - DIY friendly",
    "Works in apartments, condos, and homes",
    "Plug into any standard wall outlet",
    "No roof installation or modifications",
    "Take it with you when you move",
    "Setup in under 5 minutes"
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
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              Designed for Everyone
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              No experience?
              <span className="font-medium text-green-600"> No problem.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our solar kits are designed for everyday people. Whether you're a first-time renter or a seasoned homeowner, you can have solar power running in minutes.
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

            {/* User Types */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Home className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Renters</div>
                <div className="text-xs text-gray-600">Portable solution</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <User className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Homeowners</div>
                <div className="text-xs text-gray-600">Easy upgrade</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Wrench className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">DIY Beginners</div>
                <div className="text-xs text-gray-600">No skills needed</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              See Installation Guide
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

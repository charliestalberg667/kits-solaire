
import { motion } from "framer-motion";

const features = [
  {
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Plug & Play",
    description: "Simply plug into any standard outlet. No wiring, no installation, no electrician needed."
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400&h=300",
    title: "5-Minute Setup",
    description: "From box to power generation in under 5 minutes. The fastest solar solution ever created."
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Safe & Certified",
    description: "UL certified components with built-in safety features. Peace of mind included."
  },
  {
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=400&h=300",
    title: "Clean Energy",
    description: "Reduce your carbon footprint while saving on electricity bills. Good for you and the planet."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Why Choose Our
            <span className="font-medium text-blue-600"> Solar Kits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for simplicity, designed for everyone. Experience the future of home energy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-gray-50"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

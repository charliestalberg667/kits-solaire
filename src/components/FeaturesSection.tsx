
import { Plug, Clock, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Plug,
    title: "Plug & Play",
    description: "Simply plug into any standard outlet. No wiring, no installation, no electrician needed."
  },
  {
    icon: Clock,
    title: "5-Minute Setup",
    description: "From box to power generation in under 5 minutes. The fastest solar solution ever created."
  },
  {
    icon: Shield,
    title: "Safe & Certified",
    description: "UL certified components with built-in safety features. Peace of mind included."
  },
  {
    icon: Leaf,
    title: "Clean Energy",
    description: "Reduce your carbon footprint while saving on electricity bills. Good for you and the planet."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Why Choose Our
            <span className="font-medium text-blue-600"> Solar Kits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered for simplicity, designed for everyone. Experience the future of home energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 p-6 rounded-2xl hover:bg-gray-50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

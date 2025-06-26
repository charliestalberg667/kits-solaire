
import { motion } from "framer-motion";

const stats = [
  { number: "50%", label: "Average Electricity Bill Reduction", subtext: "Typical savings per month" },
  { number: "5 Min", label: "Setup Time", subtext: "From box to power generation" },
  { number: "12 Mo", label: "Payback Period", subtext: "Kit pays for itself" },
  { number: "10,000+", label: "Happy Customers", subtext: "And growing every day" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Proven Results from Real Customers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These aren't just numbers – they're real savings from real people who made the switch to SolarKit.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-800 p-6 rounded-2xl hover:bg-gray-750 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-base md:text-lg font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

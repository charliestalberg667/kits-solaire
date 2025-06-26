
const stats = [
  { number: "50%", label: "Average Electricity Bill Reduction" },
  { number: "5 Min", label: "Setup Time" },
  { number: "10 Year", label: "Warranty Coverage" },
  { number: "24/7", label: "Power Generation Monitoring" }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

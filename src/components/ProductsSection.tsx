
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Star, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "SolarKit 440W",
      subtitle: "Single Panel Kit",
      power: "440W",
      description: "Perfect for apartments and small homes",
      price: "$899",
      originalPrice: "$1,199",
      savings: "Save $300",
      monthlyBill: "$25-50",
      features: [
        "1 x 440W Solar Panel",
        "Micro-inverter included",
        "10ft extension cable",
        "Mobile app monitoring",
        "10-year warranty",
        "UL certified components"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600&h=400",
      popular: false,
      testimonial: "Cut my bill by 40% in the first month!" 
    },
    {
      id: 2,
      name: "SolarKit 800W",
      subtitle: "Dual Panel Kit - Most Popular",
      power: "800W",
      description: "Best value for larger homes and maximum savings",
      price: "$1,599",
      originalPrice: "$2,199",
      savings: "Save $600",
      monthlyBill: "$50-100",
      features: [
        "2 x 400W Solar Panels",
        "Dual micro-inverters",
        "20ft extension cable",
        "Advanced monitoring",
        "10-year warranty",
        "Weather-resistant design"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600&h=400",
      popular: true,
      testimonial: "Amazing! Paid for itself in 8 months."
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Choose Your
            <span className="font-medium text-blue-600"> Savings Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Two powerful options designed to slash your electricity bills. Both kits pay for themselves within 12 months.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-green-600">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium">FREE Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">4.8/5 Customer Rating</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  product.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 text-sm font-medium rounded-bl-lg z-10">
                    🔥 BEST VALUE
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                    <img 
                      src={product.image} 
                      alt={`${product.name} solar panel kit for home energy savings`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardTitle className="text-2xl font-light text-gray-900 mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{product.subtitle}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-blue-500" />
                    <span className="text-3xl font-light text-blue-600">{product.power}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Pricing with urgency */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-light text-gray-900">{product.price}</span>
                      <div className="text-left">
                        <div className="text-lg text-gray-400 line-through">{product.originalPrice}</div>
                        <div className="text-sm text-green-600 font-medium">{product.savings}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Reduces bills by {product.monthlyBill}/month</p>
                  </div>

                  {/* Customer testimonial */}
                  <div className="bg-blue-50 p-3 rounded-lg mb-6">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-blue-800 italic">"{product.testimonial}"</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 ${
                      product.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Order Now - Free Shipping
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-2">
                    💡 Installs in 5 minutes • 30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional conversion elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">⚡ Limited Time Offer</h3>
            <p className="text-yellow-700">Order in the next 24 hours and get FREE installation support worth $199</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

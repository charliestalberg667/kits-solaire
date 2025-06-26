
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Sun, Battery } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "SolarKit 440W",
      subtitle: "Single Panel Kit",
      power: "440W",
      description: "Perfect for smaller homes and apartments",
      price: "$899",
      features: [
        "1 x 440W Solar Panel",
        "Micro-inverter included",
        "10ft extension cable",
        "Mobile app monitoring",
        "10-year warranty",
        "UL certified components"
      ],
      icon: Sun,
      popular: false
    },
    {
      id: 2,
      name: "SolarKit 800W",
      subtitle: "Dual Panel Kit",
      power: "800W",
      description: "Ideal for larger homes and maximum savings",
      price: "$1,599",
      features: [
        "2 x 400W Solar Panels",
        "Dual micro-inverters",
        "20ft extension cable",
        "Advanced monitoring",
        "10-year warranty",
        "Weather-resistant design"
      ],
      icon: Battery,
      popular: true
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Choose Your
            <span className="font-medium text-blue-600"> Solar Kit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two powerful options designed to meet different energy needs. Both kits are plug-and-play ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                product.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-light text-gray-900 mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 mb-4">{product.subtitle}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-3xl font-light text-blue-600">{product.power}</span>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="text-4xl font-light text-gray-900 mb-6">
                  {product.price}
                  <span className="text-base text-gray-500 font-normal">/kit</span>
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
                  className={`w-full py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    product.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

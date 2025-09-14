import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    icon: Heart,
    name: "Essential",
    price: "₹50,000",
    popular: false,
    description: "Perfect for intimate ceremonies and smaller celebrations",
    features: [
      "6 hours wedding coverage",
      "1 photographer",
      "300+ edited photos",
      "Online gallery",
      "USB delivery",
      "Print release"
    ],
    notIncluded: [
      "Second photographer",
      "Engagement session",
      "Physical prints"
    ]
  },
  {
    icon: Sparkles,
    name: "Premium",
    price: "₹85,000",
    popular: true,
    description: "Most popular choice for complete wedding documentation",
    features: [
      "10 hours wedding coverage",
      "2 photographers",
      "500+ edited photos",
      "Online gallery",
      "USB delivery",
      "Print release",
      "Engagement session",
      "Getting ready coverage",
      "Reception coverage"
    ],
    notIncluded: [
      "Physical album",
      "Same day highlights"
    ]
  },
  {
    icon: Crown,
    name: "Luxury",
    price: "₹1,25,000",
    popular: false,
    description: "The ultimate wedding photography experience",
    features: [
      "12 hours wedding coverage",
      "2 photographers + assistant",
      "800+ edited photos",
      "Premium online gallery",
      "USB delivery",
      "Print release",
      "Engagement session",
      "Getting ready coverage",
      "Reception coverage",
      "Premium photo album",
      "Same day highlights reel",
      "Drone photography (if permitted)"
    ],
    notIncluded: []
  }
];

const addOns = [
  { name: "Additional Hour", price: "₹5,000" },
  { name: "Second Photographer", price: "₹15,000" },
  { name: "Engagement Session", price: "₹12,000" },
  { name: "Premium Album (30 pages)", price: "₹18,000" },
  { name: "Drone Coverage", price: "₹10,000" },
  { name: "Same Day Highlights", price: "₹8,000" },
  { name: "Raw Photo Access", price: "₹15,000" },
  { name: "Rush Delivery (1 week)", price: "₹12,000" }
];

export const WeddingPackages = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Wedding Photography Packages
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your special day. Each package is designed 
            to capture every precious moment with professional excellence.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4 pb-6">
                <div className="mx-auto p-3 rounded-full bg-primary/10">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                      <div className="h-4 w-4 mt-0.5 flex-shrink-0 rounded-full border border-muted"></div>
                      <span className="text-sm text-muted-foreground line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  <Link to="/contact">Choose Package</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-card rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Add-on Services
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Enhance your package with these additional services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-background rounded-lg">
                <span className="text-sm text-foreground">{addon.name}</span>
                <span className="text-sm font-semibold text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Book Your Wedding Photography?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom package that perfectly 
            captures your special day.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/gallery">View Wedding Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
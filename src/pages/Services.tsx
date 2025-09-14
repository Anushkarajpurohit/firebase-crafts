import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Baby, Building, Users, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Comprehensive wedding coverage from engagement to reception, capturing every precious moment of your special day.",
    features: ["Full day coverage", "Engagement session", "Digital gallery", "Print release"],
    price: "Starting from ₹50,000"
  },
  {
    icon: Users,
    title: "Portrait Sessions",
    description: "Professional portrait photography for individuals, couples, families, and corporate headshots.",
    features: ["Studio or location", "Multiple outfits", "Retouched images", "Professional lighting"],
    price: "Starting from ₹8,000"
  },
  {
    icon: Baby,
    title: "Maternity & Newborn",
    description: "Gentle and artistic photography celebrating new life and the beauty of motherhood.",
    features: ["Maternity session", "Newborn safety", "Props included", "Family photos"],
    price: "Starting from ₹12,000"
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional documentation of corporate events, conferences, and business gatherings.",
    features: ["Event coverage", "Team photos", "Candid shots", "Quick delivery"],
    price: "Starting from ₹15,000"
  },
  {
    icon: Palette,
    title: "Creative Shoots",
    description: "Artistic and conceptual photography for portfolios, fashion, and creative projects.",
    features: ["Creative direction", "Styling advice", "Unique concepts", "High-end retouching"],
    price: "Starting from ₹20,000"
  },
  {
    icon: Camera,
    title: "Commercial Photography",
    description: "Product photography, brand campaigns, and commercial imagery for businesses.",
    features: ["Product shots", "Brand photography", "Commercial rights", "Multiple formats"],
    price: "Custom pricing"
  }
];

export const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Photography Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of photography services, each crafted 
            to capture your unique story with artistic excellence and professional quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <div className="text-primary font-semibold">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Custom Packages Available
          </h2>
          <p className="text-muted-foreground mb-6">
            Need something specific? I create custom photography packages tailored 
            to your unique requirements and budget.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
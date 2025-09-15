import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, PiggyBank, Building, Heart, Car } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    description: "Expert guidance in selecting and managing mutual fund investments for optimal returns.",
    features: ["SIP Planning", "Goal-based investing", "Portfolio diversification", "Regular review & rebalancing"],
    price: "Starting from ₹1,000/month"
  },
  {
    icon: PiggyBank,
    title: "SIP (Systematic Investment Plan)",
    description: "Build wealth systematically with disciplined investment through SIPs in various instruments.",
    features: ["Flexible amounts", "Tax-efficient planning", "Goal mapping", "Auto debit facility"],
    price: "Minimum ₹500/month"
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Comprehensive life insurance solutions to protect your family's financial security.",
    features: ["Term insurance", "ULIP plans", "Endowment policies", "Pension plans"],
    price: "Premiums from ₹500/month"
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Medical insurance coverage for individuals and families with comprehensive benefits.",
    features: ["Cashless treatment", "Family floater", "Critical illness cover", "Maternity benefits"],
    price: "Starting ₹5,000/year"
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Complete motor insurance solutions for cars and two-wheelers with instant claims.",
    features: ["Comprehensive cover", "Third-party liability", "Add-on covers", "Quick claim settlement"],
    price: "Competitive premiums"
  },
  {
    icon: Building,
    title: "Investment Portfolio Management",
    description: "Professional portfolio management services for high net worth individuals.",
    features: ["Personalized strategy", "Risk assessment", "Regular monitoring", "Tax optimization"],
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
            Financial Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs. From investment 
            planning to insurance coverage, I provide expert guidance for all your financial goals.
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
                  <Link to="/contact">Get Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Custom Financial Plans Available
          </h2>
          <p className="text-muted-foreground mb-6">
            Need a personalized approach? I create custom financial plans tailored 
            to your specific goals, risk appetite, and investment timeline.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
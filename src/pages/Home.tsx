import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Building Your
              <span className="text-primary block">Financial Future</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Dhan Ketuu Financial Services, where your financial dreams become reality. 
              I specialize in comprehensive financial planning, investment management, and insurance 
              solutions tailored to secure your family's future with expertise and trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Portrait Placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-b from-muted to-accent rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Professional Portrait</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              About Dhan Ketuu
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 12 years of experience in financial services, I have dedicated 
              my career to helping individuals and families achieve their financial goals. 
              My expertise spans mutual funds, insurance, investment portfolio management, 
              and comprehensive financial planning. I believe in building long-term 
              relationships based on trust, transparency, and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, number: "₹500Cr+", label: "Assets Under Management" },
              { icon: Users, number: "2000+", label: "Happy Clients" },
              { icon: Award, number: "25+", label: "Industry Awards" },
              { icon: Shield, number: "15+", label: "Insurance Partners" },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create a personalized financial strategy that 
            grows your wealth and protects what matters most to you.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
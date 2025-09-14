import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Award, Users, Heart } from "lucide-react";
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
              Capturing Life's
              <span className="text-primary block">Beautiful Moments</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Atharva Kadam Photography, where every frame tells a story. 
              I specialize in creating timeless memories through the art of photography, 
              capturing the essence of your most precious moments with elegance and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/gallery">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Portrait Placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-b from-muted to-accent rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Portrait Photo</p>
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
              About Atharva Kadam
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 8 years of experience in professional photography, I have dedicated 
              my career to capturing the beauty in every moment. My passion lies in creating 
              authentic, emotional imagery that tells your unique story. From intimate 
              weddings to corporate events, I bring a keen eye for detail and a commitment 
              to excellence to every shoot.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, number: "500+", label: "Projects Completed" },
              { icon: Heart, number: "200+", label: "Happy Couples" },
              { icon: Award, number: "15+", label: "Awards Won" },
              { icon: Users, number: "1000+", label: "Satisfied Clients" },
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
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to capture your special moments and create memories 
            that will last a lifetime.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
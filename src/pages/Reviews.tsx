import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    rating: 5,
    text: "Atharva captured our wedding day perfectly! Every emotion, every smile, every tear of joy - it's all there in the most beautiful way. We couldn't have asked for a better photographer.",
    hasVideo: true
  },
  {
    id: 2,
    name: "Anjali Mehta",
    event: "Maternity Shoot",
    rating: 5,
    text: "The maternity session was incredible. Atharva made me feel so comfortable and beautiful. The photos are artistic masterpieces that I'll treasure forever.",
    hasVideo: false
  },
  {
    id: 3,
    name: "Vikram Industries",
    event: "Corporate Event",
    rating: 5,
    text: "Professional, punctual, and incredibly talented. Atharva documented our annual conference beautifully, capturing both the formal moments and candid interactions perfectly.",
    hasVideo: true
  },
  {
    id: 4,
    name: "Sanya & Arjun",
    event: "Engagement",
    rating: 5,
    text: "From our engagement shoot to the wedding, Atharva has been amazing. The photos tell our love story in the most romantic way. Highly recommend!",
    hasVideo: false
  },
  {
    id: 5,
    name: "Meera Patel",
    event: "Portrait Session",
    rating: 5,
    text: "I needed professional headshots for my business, and Atharva delivered beyond expectations. The quality and attention to detail is outstanding.",
    hasVideo: true
  },
  {
    id: 6,
    name: "The Kumar Family",
    event: "Family Portrait",
    rating: 5,
    text: "Working with Atharva was such a pleasant experience. He made our kids comfortable and captured beautiful family moments that we'll cherish forever.",
    hasVideo: false
  }
];

const videoTestimonials = [
  {
    id: 1,
    title: "Priya & Rahul's Wedding Experience",
    description: "Hear directly from the couple about their wedding photography experience",
    duration: "2:30"
  },
  {
    id: 2,
    title: "Corporate Client Testimonial",
    description: "Vikram Industries shares their experience with our event coverage",
    duration: "1:45"
  },
  {
    id: 3,
    title: "Portrait Session Review",
    description: "Meera talks about her professional headshot experience",
    duration: "1:20"
  }
];

export const Reviews = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Client Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Hear what my clients have to say about 
            their photography experience and the memories we created together.
          </p>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-video bg-gradient-to-br from-muted to-accent rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-primary mx-auto mb-2" fill="currentColor" />
                    <p className="text-sm text-muted-foreground">{video.duration}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Play className="h-5 w-5 mr-2" fill="currentColor" />
                      Play Video
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Written Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Written Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 text-primary/30 mb-2" />
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  {testimonial.hasVideo && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Video Review
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "500+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "50+", label: "Video Reviews" },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted me to capture 
            their most important moments. Let's create something beautiful together.
          </p>
          <Button size="lg">
            Book Your Session Today
          </Button>
        </div>
      </div>
    </div>
  );
};
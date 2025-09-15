import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Star, Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Rajesh Sharma",
    rating: 5,
    review: "Dhan Ketuu has been instrumental in planning my retirement. His expertise in mutual funds helped me build a substantial corpus. Highly professional and trustworthy.",
    service: "Mutual Fund Investment",
    videoThumbnail: true
  },
  {
    name: "Priya Patel",
    rating: 5,
    review: "Excellent service for health insurance. He helped us choose the perfect family floater policy. The claim settlement was smooth and hassle-free.",
    service: "Health Insurance",
    videoThumbnail: true
  },
  {
    name: "Amit Gupta",
    rating: 5,
    review: "Outstanding financial planning services. He created a comprehensive portfolio that balances growth and security. My investments have grown by 15% annually.",
    service: "Portfolio Management",
    videoThumbnail: false
  },
  {
    name: "Sneha Joshi",
    rating: 5,
    review: "Very knowledgeable about SIP planning. He guided me through systematic investing and now I'm on track to achieve all my financial goals.",
    service: "SIP Planning",
    videoThumbnail: true
  },
  {
    name: "Vikram Singh",
    rating: 5,
    review: "Professional approach to life insurance planning. He explained all policy options clearly and helped me choose the best coverage for my family.",
    service: "Life Insurance",
    videoThumbnail: false
  },
  {
    name: "Meera Krishnan",
    rating: 4,
    review: "Reliable and responsive service. He always makes time for my queries and provides detailed explanations about market conditions and investment strategies.",
    service: "Financial Consultation",
    videoThumbnail: true
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
            Hear from our satisfied clients about their experience with our financial 
            services and how we've helped them achieve their financial goals.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </CardDescription>
                {review.videoThumbnail && (
                  <div className="relative aspect-video bg-gradient-to-br from-muted to-accent rounded-lg flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform">
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                    <Button variant="secondary" size="lg" className="relative z-10">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Video Review
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-card rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-6">
            We'd love to hear about your journey with us. Share your review and help 
            others make informed financial decisions.
          </p>
          <Button size="lg" variant="outline">
            Leave a Review
          </Button>
        </div>
      </div>
    </div>
  );
};
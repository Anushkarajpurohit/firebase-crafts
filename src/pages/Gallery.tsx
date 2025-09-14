import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Play } from "lucide-react";

const categories = ["All", "Weddings", "Portraits", "Events", "Commercial", "Maternity"];

const galleryItems = [
  { id: 1, type: "photo", category: "Weddings", title: "Elegant Wedding Ceremony", description: "Beautiful outdoor ceremony" },
  { id: 2, type: "video", category: "Weddings", title: "Wedding Highlight Reel", description: "3-minute wedding story" },
  { id: 3, type: "photo", category: "Portraits", title: "Professional Headshots", description: "Corporate portrait session" },
  { id: 4, type: "photo", category: "Events", title: "Corporate Gala", description: "Annual company celebration" },
  { id: 5, type: "video", category: "Events", title: "Event Highlights", description: "Conference documentation" },
  { id: 6, type: "photo", category: "Maternity", title: "Maternity Bliss", description: "Studio maternity session" },
  { id: 7, type: "photo", category: "Weddings", title: "Reception Dance", description: "Candid wedding moments" },
  { id: 8, type: "photo", category: "Commercial", title: "Product Showcase", description: "Brand photography" },
  { id: 9, type: "video", category: "Commercial", title: "Brand Story", description: "Corporate video production" },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Photography Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio showcasing diverse photography work across weddings, 
            portraits, events, and commercial projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-accent flex items-center justify-center overflow-hidden">
                {/* Placeholder content */}
                <div className="text-center">
                  {item.type === "video" ? (
                    <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                  ) : (
                    <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                  )}
                  <p className="text-sm text-muted-foreground">{item.type === "video" ? "Video" : "Photo"}</p>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-primary/90">
                  {item.category}
                </Badge>
                
                {/* Video Icon */}
                {item.type === "video" && (
                  <div className="absolute bottom-3 right-3">
                    <Play className="h-6 w-6 text-white" fill="currentColor" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            Load More Work
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-card rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each project is unique, and I'd love to create something beautiful for you. 
            Let's discuss your vision and bring it to life.
          </p>
          <Button size="lg">
            Book Your Session
          </Button>
        </div>
      </div>
    </div>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Camera, Clock, MapPin } from "lucide-react";

const behindScenesVideos = [
  {
    id: 1,
    title: "Wedding Day Behind the Scenes",
    description: "See how I capture those perfect wedding moments while staying invisible",
    duration: "5:30",
    category: "Wedding",
    location: "Mumbai",
    equipment: ["Canon R5", "24-70mm f/2.8", "Flash Setup"]
  },
  {
    id: 2,
    title: "Studio Portrait Setup",
    description: "My lighting technique for creating dramatic portrait shots",
    duration: "3:45",
    category: "Portrait",
    location: "Studio",
    equipment: ["Profoto Lights", "85mm f/1.4", "Reflectors"]
  },
  {
    id: 3,
    title: "Corporate Event Coverage",
    description: "How I document corporate events while maintaining professionalism",
    duration: "4:20",
    category: "Corporate",
    location: "Pune",
    equipment: ["Dual Camera Setup", "70-200mm f/2.8", "Wireless Flash"]
  },
  {
    id: 4,
    title: "Maternity Shoot Process",
    description: "Creating comfortable and beautiful maternity portraits",
    duration: "6:10",
    category: "Maternity",
    location: "Outdoor Location",
    equipment: ["Natural Light", "50mm f/1.4", "Portable Reflector"]
  },
  {
    id: 5,
    title: "Product Photography Setup",
    description: "Commercial photography techniques for perfect product shots",
    duration: "4:55",
    category: "Commercial",
    location: "Studio",
    equipment: ["Macro Lens", "Controlled Lighting", "Color Accuracy Tools"]
  },
  {
    id: 6,
    title: "Night Wedding Photography",
    description: "Techniques for capturing stunning photos in low light conditions",
    duration: "7:20",
    category: "Wedding",
    location: "Goa",
    equipment: ["High ISO Capable Cameras", "Fast Lenses", "Creative Lighting"]
  }
];

const categories = ["All", "Wedding", "Portrait", "Corporate", "Maternity", "Commercial"];

export const BehindScenes = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Behind the Scenes
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get an exclusive look at my photography process, techniques, and the passion 
            that goes into creating every perfect shot. Learn about my approach and see 
            the magic happen behind the camera.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {behindScenesVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-video bg-gradient-to-br from-muted to-accent rounded-t-lg flex items-center justify-center overflow-hidden">
                {/* Video Thumbnail Placeholder */}
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-2" fill="currentColor" />
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {video.duration}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  >
                    <Play className="h-5 w-5 mr-2" fill="currentColor" />
                    Watch Now
                  </Button>
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-3 left-3 bg-primary/90">
                  {video.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{video.location}</span>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-foreground mb-2 flex items-center">
                    <Camera className="h-3 w-3 mr-1" />
                    Equipment Used:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {video.equipment.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Process Section */}
        <div className="bg-card rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            My Photography Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Preparation",
                description: "Every great shot begins with careful planning. I scout locations, understand lighting conditions, and prepare equipment based on the specific requirements of each shoot."
              },
              {
                step: "02",
                title: "Capturing the Moment",
                description: "During the shoot, I focus on authentic moments while directing when necessary. My approach is unobtrusive yet comprehensive, ensuring nothing important is missed."
              },
              {
                step: "03",
                title: "Post-Production Magic",
                description: "The magic continues in post-production where I carefully edit each image, enhancing colors, adjusting lighting, and ensuring every photo tells its story perfectly."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">{process.step}</div>
                <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="text-center bg-background rounded-lg p-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Professional Equipment
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I use industry-leading equipment to ensure the highest quality results. 
            From cameras to lighting, every piece of gear is chosen for its reliability 
            and ability to capture stunning imagery.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              "Canon R5 & R6",
              "Sony A7R IV",
              "L-Series Lenses",
              "Profoto Lighting",
              "DJI Drone",
              "Capture One Pro",
              "Adobe Creative Suite",
              "Color Calibration Tools"
            ].map((equipment, index) => (
              <div key={index} className="p-4 bg-card rounded-lg">
                <Camera className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-foreground">{equipment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
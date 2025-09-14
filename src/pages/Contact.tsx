import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Camera } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to capture your special moments? I'd love to hear about your vision 
            and discuss how we can create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding Photography</SelectItem>
                    <SelectItem value="portrait">Portrait Session</SelectItem>
                    <SelectItem value="event">Event Coverage</SelectItem>
                    <SelectItem value="commercial">Commercial Photography</SelectItem>
                    <SelectItem value="maternity">Maternity & Newborn</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date (if applicable)</Label>
                <Input id="eventDate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="over-2l">Over ₹2,00,000</SelectItem>
                    <SelectItem value="discuss">Let's Discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Me About Your Vision</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your event, style preferences, and any specific requirements..."
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">Available 9 AM - 9 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">atharva@kadamphotography.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                    <p className="text-sm text-muted-foreground">Available for travel worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 9 AM - 9 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: By appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Follow My Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Instagram className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">@atharvakadamphotography</p>
                    <p className="text-sm text-muted-foreground">Daily updates and behind-scenes</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Facebook className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Atharva Kadam Photography</p>
                    <p className="text-sm text-muted-foreground">Latest work and client features</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">How far in advance should I book?</h4>
                  <p className="text-sm text-muted-foreground">For weddings, 6-12 months. Other sessions can be booked 2-4 weeks in advance.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-1">Do you travel for destination weddings?</h4>
                  <p className="text-sm text-muted-foreground">Yes! I love destination weddings and am available for travel worldwide.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-1">How long until I receive my photos?</h4>
                  <p className="text-sm text-muted-foreground">Wedding galleries: 4-6 weeks. Portrait sessions: 2-3 weeks.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
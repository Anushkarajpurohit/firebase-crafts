import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy, Medal } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Financial Advisor 2023",
    organization: "Financial Planning Association",
    description: "Recognized for outstanding client service and innovative financial planning solutions.",
    year: "2023"
  },
  {
    icon: Star,
    title: "Top Performer - Mutual Fund Sales",
    organization: "Investment Dealers Association",
    description: "Achieved highest client portfolio growth in the mutual funds category.",
    year: "2022"
  },
  {
    icon: Medal,
    title: "Excellence in Insurance Services",
    organization: "Insurance Regulatory Authority",
    description: "Awarded for exceptional customer satisfaction in insurance claim settlements.",
    year: "2022"
  },
  {
    icon: Award,
    title: "Client Choice Award",
    organization: "Financial Services Board",
    description: "Selected by clients for outstanding personalized financial advisory services.",
    year: "2021"
  },
  {
    icon: Trophy,
    title: "Innovation in Financial Planning",
    organization: "National Financial Advisors Council",
    description: "Recognized for implementing cutting-edge financial planning strategies.",
    year: "2021"
  },
  {
    icon: Star,
    title: "Outstanding Service Excellence",
    organization: "Customer Service Institute",
    description: "Awarded for maintaining 99% client satisfaction rating over 3 consecutive years.",
    year: "2020"
  }
];

const certifications = [
  "Certified Financial Planner (CFP)",
  "Chartered Financial Analyst (CFA)",
  "Licensed Insurance Agent",
  "Mutual Fund Distributor License",
  "Investment Advisor Registration",
  "Risk Management Certification"
];

export const Awards = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Awards & Recognition
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry recognition and certifications that demonstrate our commitment to 
            excellence and professional standards in financial services.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{award.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{award.organization}</p>
                    </div>
                  </div>
                  <div className="bg-accent px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-accent-foreground">{award.year}</span>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {award.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-card rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Zap, Shield, Users, BarChart3, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure and modern technology stack."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools that bring your team together, no matter where they are located."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Detailed insights and analytics to help you make data-driven decisions and track performance."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Stay connected with instant notifications and real-time synchronization across all devices."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support from our dedicated team of experts whenever you need help."
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features your business needs 
            to thrive in today's competitive market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
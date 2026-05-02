import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the loop
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates, feature announcements, and industry insights 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
              />
              <Button 
                variant="secondary" 
                size="lg"
                className="px-8"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
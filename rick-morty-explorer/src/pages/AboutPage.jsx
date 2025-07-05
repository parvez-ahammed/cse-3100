// src/pages/AboutPage.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  
  // For local image from desktop (replace with your actual path)
  const developerImage = "/src/assets/developer.jpg"; // Or use relative path from public folder

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <Card className="bg-card/90 backdrop-blur-sm border-border shadow-xl">
          <CardHeader className="relative">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="absolute left-6 top-6 flex items-center gap-2 text-foreground/80 hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg">Back to Home</span>
            </Button>
            <CardTitle className="text-4xl font-bold text-center text-foreground pt-2 pb-6">
              About Us
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-10 px-10 pb-10">
            {/* App Info Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Rick & Morty Character Explorer
              </h2>
              <p className="text-foreground/90 text-lg leading-relaxed">
                Dive into the infinite dimensions of the Rick and Morty universe with our 
                comprehensive character explorer. Discover detailed profiles, episode appearances, 
                and interdimensional statistics for every character across the multiverse.
              </p>
            </section>

            {/* Developer Info Section */}
            <section className="flex gap-10 items-center bg-accent/20 p-6 rounded-xl">
              <div className="w-48 h-48 flex-shrink-0">
                <img 
                  src={developerImage} 
                  alt="Developer" 
                  className="w-full h-full rounded-full object-cover border-4 border-muted shadow-md"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/200";
                  }}
                />
              </div>
              <div className="text-foreground/90">
                <h3 className="text-2xl font-bold mb-3 text-accent-foreground">Developer</h3>
                <p className="font-medium text-xl mb-1">Md Wasif Ali</p>
                <p className="text-lg mb-4">Frontend Developer</p>
                <p className="text-primary hover:underline text-lg">
                  <a href="mailto:your.email@example.com">wasif.cse.20220204054@aust.edu</a>
                </p>
              </div>
            </section>

            {/* Favorite Quote */}
            <section className="bg-secondary/30 p-8 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Favorite Rick & Morty Quote</h3>
              <blockquote className="italic text-foreground/90 text-xl leading-relaxed">
                "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."
              </blockquote>
              <p className="mt-4 text-right text-muted-foreground text-lg">- Rick Sanchez</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
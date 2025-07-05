// src/pages/ContactPage.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";



 const desktopBackground = "/src/assets/rick-morty.jpg";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${desktopBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Card className="w-full max-w-md bg-white/30 backdrop-blur-lg border border-white/20">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="rounded-full bg-white/20 hover:bg-white/30"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl font-bold text-center text-white">
              Contact Us
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {submitted && (
            <p className="mb-4 text-center text-green-300 font-medium">
              Message sent successfully!
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              name="name" 
              placeholder="Your Name" 
              required 
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Your Email" 
              required
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
            />
            <Textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5} 
              required
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
            />
            <Button 
              type="submit" 
              className="w-full bg-white/30 hover:bg-white/40 text-white"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
import DynamicNoteTaker from "@/components/DynamicNoteTaker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenTool, Sparkles, Trash2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8 animate-fade-in">
            Write it out and get it out of your system
          </h1>
        </div>

        {/* Main Note Taker */}
        <div className="animate-fade-in">
          <DynamicNoteTaker />
        </div>

        {/* How it Works Section */}
        <div className="mt-16 text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-6xl">✍️</div>
              <h3 className="text-xl font-semibold text-primary">1. Start Typing</h3>
              <p className="text-muted-foreground">Begin writing your notes naturally in the text area above.</p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl">🔢</div>
              <h3 className="text-xl font-semibold text-primary">2. Word Counter</h3>
              <p className="text-muted-foreground">Watch the word count increase and see when deletion will trigger.</p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl">💫</div>
              <h3 className="text-xl font-semibold text-primary">3. Auto Delete</h3>
              <p className="text-muted-foreground">Every 5 words, the first 2 words automatically disappear with animation.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-muted-foreground">
            Built with 💜 and ⚡ • Powered by innovative word algorithms
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
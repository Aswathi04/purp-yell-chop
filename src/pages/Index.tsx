import DynamicNoteTaker from "@/components/DynamicNoteTaker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenTool, Sparkles, Trash2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8 mb-12">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
              Note Differently
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
              Experience the future of note-taking with our unique word-deletion algorithm. 
              Every 5 words triggers an automatic cleanup of the first 2 words.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-glow-primary transition-all duration-300">
              <div className="flex items-center space-x-3">
                <PenTool className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Smart Writing</h3>
                  <p className="text-muted-foreground">Auto-deleting words</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20 hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Live Animation</h3>
                  <p className="text-muted-foreground">Smooth transitions</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex items-center space-x-3">
                <Trash2 className="h-8 w-8 text-secondary-foreground" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Auto Cleanup</h3>
                  <p className="text-muted-foreground">Intelligent deletion</p>
                </div>
              </div>
            </Card>
          </div>
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
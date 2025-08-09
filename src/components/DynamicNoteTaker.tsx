import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DynamicNoteTaker = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [deletingWords, setDeletingWords] = useState<number[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const processText = (newText: string) => {
    const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);

    // Check if we need to delete words (every 5 words, delete first 2)
    if (words.length > 0 && words.length % 5 === 0) {
      // Mark first 2 words for deletion with animation
      setDeletingWords([0, 1]);
      
      setTimeout(() => {
        // Remove first 2 words after animation
        const remainingWords = words.slice(2);
        const newTextContent = remainingWords.join(' ');
        setText(newTextContent);
        setDeletingWords([]);
        
        // Focus back on textarea and move cursor to end
        if (textareaRef.current) {
          textareaRef.current.focus();
          const length = newTextContent.length;
          textareaRef.current.setSelectionRange(length, length);
        }
      }, 300);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    processText(newText);
  };

  const renderWords = () => {
    if (!text.trim()) return null;
    
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    
    return (
      <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
        <div className="flex flex-wrap gap-2">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={`inline-block px-2 py-1 rounded-md bg-card text-card-foreground transition-all duration-300 ${
                deletingWords.includes(index) 
                  ? 'animate-word-delete bg-destructive text-destructive-foreground' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-card via-card/95 to-secondary/20 border-0 shadow-glow-secondary">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Dynamic Note Taker
          </h2>
          <p className="text-muted-foreground">
            Watch your words disappear! Every 5 words, the first 2 vanish automatically.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Word Count: {wordCount}
          </Badge>
          <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
            Next deletion: {wordCount > 0 ? 5 - (wordCount % 5) : 5} words
          </Badge>
        </div>

        <div className="space-y-4">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            placeholder="Start typing your notes... After every 5 words, the first 2 will disappear!"
            className="w-full h-32 p-4 rounded-lg border-2 border-border focus:border-primary focus:ring-2 focus:ring-ring focus:outline-none transition-all bg-background text-foreground resize-none text-lg"
          />
          
          {renderWords()}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>✨ Pro tip: Type naturally and watch the magic happen!</p>
        </div>
      </div>
    </Card>
  );
};

export default DynamicNoteTaker;
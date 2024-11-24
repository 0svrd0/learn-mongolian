import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const WordChains = () => {
  const [chain, setChain] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const startNewChain = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)].mongolian;
    setChain([randomWord]);
    setUserInput("");
    setScore(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lastWord = chain[chain.length - 1];
    const lastLetter = lastWord[lastWord.length - 1].toLowerCase();
    
    if (userInput.toLowerCase().startsWith(lastLetter)) {
      const matchingWord = WORDS.find(
        word => word.mongolian.toLowerCase() === userInput.toLowerCase()
      );
      
      if (matchingWord && !chain.includes(matchingWord.mongolian)) {
        setChain([...chain, matchingWord.mongolian]);
        setScore(score + 1);
        setUserInput("");
        toast({
          title: "Good job!",
          description: `${matchingWord.mongolian} means "${matchingWord.meaning}"`,
        });
      } else {
        toast({
          title: "Invalid word",
          description: "Word not found in vocabulary or already used",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Wrong start letter",
        description: `Word must start with "${lastLetter}"`,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    startNewChain();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-mongol-charcoal mb-4">Word Chains</h2>
      <div className="text-xl font-bold text-mongol-earth mb-4">Score: {score}</div>
      <div className="mb-4 space-y-2">
        <div className="text-lg font-bold">Chain:</div>
        <div className="p-4 bg-mongol-sky/10 rounded">
          {chain.join(" → ")}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter a word starting with the last letter"
          className="w-full"
        />
        <div className="space-x-2">
          <Button type="submit" className="bg-mongol-grass hover:bg-mongol-grass/80">
            Submit
          </Button>
          <Button 
            type="button" 
            onClick={startNewChain}
            variant="outline"
          >
            New Chain
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WordChains;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const WordAssociation = () => {
  const [options, setOptions] = useState<Array<{ pronunciation: string; meaning: string }>>([]);
  const [currentWord, setCurrentWord] = useState({ pronunciation: "", meaning: "" });
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const getNewRound = () => {
    const shuffledWords = [...WORDS].sort(() => Math.random() - 0.5);
    const correctWord = shuffledWords[0];
    const wrongOptions = shuffledWords.slice(1, 4);
    
    setCurrentWord(correctWord);
    setOptions([...wrongOptions, correctWord].sort(() => Math.random() - 0.5));
  };

  const handleGuess = (meaning: string) => {
    if (meaning === currentWord.meaning) {
      toast({
        title: "Correct!",
        description: `${currentWord.pronunciation} means "${currentWord.meaning}"`,
      });
      setScore(score + 1);
      getNewRound();
    } else {
      toast({
        title: "Incorrect",
        description: `The correct meaning was "${currentWord.meaning}"`,
        variant: "destructive",
      });
      setScore(Math.max(0, score - 1));
      getNewRound();
    }
  };

  useEffect(() => {
    getNewRound();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-mongol-charcoal mb-4">Word Association</h2>
      <div className="text-xl font-bold text-mongol-earth mb-4">Score: {score}</div>
      <div className="text-lg mb-4">
        Match the meaning: <span className="font-bold">{currentWord.pronunciation}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleGuess(option.meaning)}
            className="bg-mongol-sky hover:bg-mongol-sky/80 text-mongol-charcoal"
          >
            {option.meaning}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WordAssociation;
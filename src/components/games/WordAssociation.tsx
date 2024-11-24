import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const WordAssociation = () => {
  const [options, setOptions] = useState<Array<{ pronunciation: string; meaning: string }>>([]);
  const [currentWord, setCurrentWord] = useState({ pronunciation: "", meaning: "" });
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const { toast } = useToast();

  const getNewRound = () => {
    const shuffledWords = [...WORDS].sort(() => Math.random() - 0.5);
    const correctWord = shuffledWords[0];
    const wrongOptions = shuffledWords.slice(1, 4);
    
    setCurrentWord(correctWord);
    setOptions([...wrongOptions, correctWord].sort(() => Math.random() - 0.5));
  };

  const resetGame = () => {
    setScore(0);
    setLives(5);
    setIsGameOver(false);
    getNewRound();
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
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives === 0) {
        setIsGameOver(true);
        toast({
          title: "Game Over!",
          description: `Final score: ${score}`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Incorrect",
          description: `The correct meaning was "${currentWord.meaning}"`,
          variant: "destructive",
        });
        getNewRound();
      }
    }
  };

  useEffect(() => {
    getNewRound();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-mongol-charcoal mb-4">Word Association</h2>
      <div className="flex justify-between mb-4">
        <div className="text-xl font-bold text-mongol-earth">Score: {score}</div>
        <div className="text-xl font-bold text-mongol-red">Lives: {"❤️".repeat(lives)}</div>
      </div>
      {!isGameOver ? (
        <>
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
        </>
      ) : (
        <Button
          onClick={resetGame}
          className="w-full bg-mongol-grass hover:bg-mongol-grass/80"
        >
          Play Again
        </Button>
      )}
    </div>
  );
};

export default WordAssociation;
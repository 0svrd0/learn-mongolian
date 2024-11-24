import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const SpeedTyping = () => {
  const [currentWord, setCurrentWord] = useState({ mongolian: "", meaning: "" });
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const getNewWord = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    setUserInput("");
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    getNewWord();
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(time => time - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      toast({
        title: "Time's up!",
        description: `Final score: ${score}`,
      });
    }
  }, [isPlaying, timeLeft, score]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (e.target.value.toLowerCase() === currentWord.meaning.toLowerCase()) {
      setScore(score + 1);
      getNewWord();
      toast({
        title: "Correct!",
        description: "Keep going!",
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-mongol-charcoal mb-4">Speed Typing</h2>
      <div className="flex justify-between mb-4">
        <div className="text-xl font-bold text-mongol-earth">Score: {score}</div>
        <div className="text-xl font-bold text-mongol-red">Time: {timeLeft}s</div>
      </div>
      {!isPlaying ? (
        <Button 
          onClick={startGame}
          className="w-full bg-mongol-grass hover:bg-mongol-grass/80"
        >
          Start Game
        </Button>
      ) : (
        <div className="space-y-4">
          <div className="text-lg">Translate: <span className="font-bold">{currentWord.mongolian}</span></div>
          <Input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type the English translation"
            className="w-full"
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

export default SpeedTyping;
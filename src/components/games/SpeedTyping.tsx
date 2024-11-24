import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const TIME_OPTIONS = {
  "1 minute": 60,
  "2 minutes 30": 150,
  "5 minutes": 300
};

const SpeedTyping = () => {
  const [currentWord, setCurrentWord] = useState({ pronunciation: "", meaning: "" });
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTime, setSelectedTime] = useState<keyof typeof TIME_OPTIONS>("1 minute");
  const { toast } = useToast();

  const getNewWord = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    setUserInput("");
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(TIME_OPTIONS[selectedTime]);
    getNewWord();
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(time => time - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isPlaying) {
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
        <div className="text-xl font-bold text-mongol-red">
          Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>
      {!isPlaying ? (
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium">Select Time:</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(TIME_OPTIONS).map((option) => (
                <Button
                  key={option}
                  onClick={() => setSelectedTime(option as keyof typeof TIME_OPTIONS)}
                  className={`${
                    selectedTime === option
                      ? "bg-mongol-grass"
                      : "bg-mongol-grass/60"
                  } hover:bg-mongol-grass/80`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
          <Button 
            onClick={startGame}
            className="w-full bg-mongol-grass hover:bg-mongol-grass/80"
          >
            Start Game
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-lg">
            Translate: <span className="font-bold">{currentWord.pronunciation}</span>
          </div>
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
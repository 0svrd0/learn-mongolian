import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";
import { shuffle } from "@/utils/arrayUtils";

const QUIZ_DURATION = 60; // seconds

const SpeedQuiz = () => {
  const { toast } = useToast();
  const [currentWord, setCurrentWord] = useState<typeof WORDS[0] | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(sessionStorage.getItem("speedQuizBestScore")) || 0;
  });
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
  }, [timeLeft, isPlaying]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(QUIZ_DURATION);
    setIsPlaying(true);
    generateQuestion();
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > bestScore) {
      setBestScore(score);
      sessionStorage.setItem("speedQuizBestScore", String(score));
      toast({
        title: "New High Score!",
        description: `You've achieved a new personal best: ${score}`,
      });
    }
    toast({
      title: "Game Over!",
      description: `Final score: ${score}`,
    });
  };

  const generateQuestion = () => {
    const shuffledWords = shuffle(WORDS);
    const newWord = shuffledWords[0];
    const wrongAnswers = shuffle(
      shuffledWords
        .slice(1)
        .filter(w => w.meaning !== newWord.meaning)
        .map(w => w.meaning)
    ).slice(0, 3);
    
    setCurrentWord(newWord);
    setOptions(shuffle([newWord.meaning, ...wrongAnswers]));
  };

  const handleAnswer = (answer: string) => {
    if (!currentWord) return;

    if (answer === currentWord.meaning) {
      setScore(prev => prev + 10);
      toast({
        title: "Correct!",
        description: "+10 points",
        variant: "default",
      });
    } else {
      setScore(prev => Math.max(0, prev - 5));
      toast({
        title: "Wrong!",
        description: "-5 points",
        variant: "destructive",
      });
    }
    generateQuestion();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-mongol-blue">Speed Quiz</h2>
        <div className="space-x-4">
          <span className="text-lg">Score: {score}</span>
          <span className="text-lg">Best: {bestScore}</span>
          <span className="text-lg">Time: {timeLeft}s</span>
        </div>
      </div>

      {!isPlaying ? (
        <Button
          onClick={startGame}
          className="w-full bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          Start Game
        </Button>
      ) : (
        <>
          <Card className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{currentWord?.mongolian}</h3>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-mongol-blue hover:bg-mongol-navy text-white"
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default SpeedQuiz;
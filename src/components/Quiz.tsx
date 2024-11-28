import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { shuffle } from "@/utils/arrayUtils";
import { Headphones } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

interface Word {
  mongolian: string;
  pronunciation: string;
  meaning: string;
  audio?: string;
}

interface QuizProps {
  words: Word[];
  lessonNumber: number;
}

const Quiz = ({ words, lessonNumber }: QuizProps) => {
  const [shuffledWords, setShuffledWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setShuffledWords(shuffle([...words]));
  }, [words]);

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "")
      .replace(/\s+/g, "")
      .trim();
  };

  const playAudio = (audioSrc?: string) => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const currentWord = shuffledWords[currentWordIndex];

  const moveToNextQuestion = () => {
    if (currentWordIndex === shuffledWords.length - 1) {
      setIsComplete(true);
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
    setUserAnswer("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedUserAnswer = normalizeString(userAnswer);
    const normalizedCorrectAnswer = normalizeString(currentWord?.meaning);
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: `"${currentWord.mongolian}" means "${currentWord.meaning}"`,
        className: "bg-green-500 text-white",
        duration: 2000,
      });
      moveToNextQuestion();
    } else {
      toast({
        title: "Incorrect",
        description: `"${currentWord.mongolian}" means "${currentWord.meaning}"`,
        variant: "destructive",
        duration: 2000,
        className: "text-lg font-medium",
      });
      setTimeout(moveToNextQuestion, 2000);
    }
  };

  if (!currentWord) {
    return null;
  }

  if (isComplete) {
    return (
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Quiz Complete!</h2>
        <p className="text-center text-lg mb-4">
          Your score: {score} out of {shuffledWords.length}
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(`/lesson/${lessonNumber}`)}>
            Back to Lesson
          </Button>
          <Button 
            onClick={() => {
              setShuffledWords(shuffle([...words]));
              setCurrentWordIndex(0);
              setScore(0);
              setIsComplete(false);
            }}
            variant="outline"
          >
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <>
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Lesson {lessonNumber} Quiz
        </h2>
        <p className="text-center mb-2">
          Question {currentWordIndex + 1} of {shuffledWords.length}
        </p>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-xl font-bold">{currentWord.mongolian}</p>
            {currentWord.audio && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => playAudio(currentWord.audio)}
                className="p-1"
              >
                <Headphones className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-gray-600">Pronunciation: {currentWord.pronunciation}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter the English translation"
              className="w-full"
              autoFocus
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Answer
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Score: {score}/{currentWordIndex}
        </div>
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/lesson/${lessonNumber}`)}
          >
            Back to Lesson
          </Button>
        </div>
      </Card>
      <Toaster />
    </>
  );
};

export default Quiz;
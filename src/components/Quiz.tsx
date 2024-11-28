import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { shuffle } from "@/utils/arrayUtils";

interface Word {
  mongolian: string;
  pronunciation: string;
  meaning: string;
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
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const currentWord = shuffledWords[currentWordIndex];

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
      });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer was "${currentWord.meaning}"`,
        variant: "destructive",
      });
    }

    setUserAnswer("");

    if (currentWordIndex === shuffledWords.length - 1) {
      setIsComplete(true);
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
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
    <Card className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/lesson/${lessonNumber}`)}
          className="mb-4"
        >
          Back to Lesson
        </Button>
        <h2 className="text-2xl font-bold text-center">
          Lesson {lessonNumber} Quiz
        </h2>
      </div>
      <p className="text-center mb-2">
        Question {currentWordIndex + 1} of {shuffledWords.length}
      </p>
      <div className="text-center mb-6">
        <p className="text-xl font-bold mb-2">{currentWord.mongolian}</p>
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
    </Card>
  );
};

export default Quiz;
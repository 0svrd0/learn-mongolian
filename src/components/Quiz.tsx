import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

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
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const currentWord = words[currentWordIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isCorrect = userAnswer.toLowerCase().trim() === currentWord.meaning.toLowerCase();
    
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

    if (currentWordIndex === words.length - 1) {
      setIsComplete(true);
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  if (isComplete) {
    return (
      <Card className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Quiz Complete!</h2>
        <p className="text-center text-lg mb-4">
          Your score: {score} out of {words.length}
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(`/lesson/${lessonNumber}`)}>
            Back to Lesson
          </Button>
          <Button 
            onClick={() => {
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
      <h2 className="text-2xl font-bold text-center mb-4">
        Lesson {lessonNumber} Quiz
      </h2>
      <p className="text-center mb-2">
        Question {currentWordIndex + 1} of {words.length}
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
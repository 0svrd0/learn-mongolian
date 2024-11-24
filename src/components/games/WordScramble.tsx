import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";

const WordScramble = () => {
  const [currentWord, setCurrentWord] = useState({ mongolian: "", meaning: "" });
  const [scrambledWord, setScrambledWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const scrambleWord = (word: string) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const getNewWord = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    setScrambledWord(scrambleWord(randomWord.mongolian));
    setUserGuess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userGuess.toLowerCase() === currentWord.mongolian.toLowerCase()) {
      toast({
        title: "Correct!",
        description: `${currentWord.mongolian} means "${currentWord.meaning}"`,
      });
      setScore(score + 1);
      getNewWord();
    } else {
      toast({
        title: "Try again!",
        description: "That's not the correct word.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    getNewWord();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-mongol-charcoal mb-4">Word Scramble</h2>
      <div className="text-xl font-bold text-mongol-earth mb-4">Score: {score}</div>
      <div className="text-lg mb-4">Unscramble: <span className="font-bold">{scrambledWord}</span></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
          className="w-full"
        />
        <Button type="submit" className="w-full bg-mongol-grass hover:bg-mongol-grass/80">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WordScramble;
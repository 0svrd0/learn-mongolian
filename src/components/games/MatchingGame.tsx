import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { WORDS } from "@/data/vocabulary";
import { shuffle } from "@/utils/arrayUtils";

const MatchingGame = () => {
  const { toast } = useToast();
  const [cards, setCards] = useState<Array<{
    id: number;
    content: string;
    type: "mongolian" | "meaning";
    isFlipped: boolean;
    isMatched: boolean;
  }>>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeLevel();
  }, [level]);

  const initializeLevel = () => {
    const startIndex = (level - 1) * 10;
    const levelWords = WORDS.slice(startIndex, startIndex + 10);
    const gameCards = levelWords.flatMap((word, index) => [
      {
        id: index * 2,
        content: word.mongolian,
        type: "mongolian" as const,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: index * 2 + 1,
        content: word.meaning,
        type: "meaning" as const,
        isFlipped: false,
        isMatched: false,
      },
    ]);
    setCards(shuffle(gameCards));
    setSelectedCards([]);
  };

  const handleCardClick = (id: number) => {
    if (selectedCards.length === 2 || cards[id].isMatched || cards[id].isFlipped) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    if (selectedCards.length === 0) {
      setSelectedCards([id]);
    } else {
      setSelectedCards([...selectedCards, id]);
      
      const firstCard = cards[selectedCards[0]];
      const secondCard = cards[id];
      
      if (
        (firstCard.type === "mongolian" && secondCard.type === "meaning" ||
         firstCard.type === "meaning" && secondCard.type === "mongolian") &&
        WORDS.some(word => 
          (word.mongolian === firstCard.content && word.meaning === secondCard.content) ||
          (word.mongolian === secondCard.content && word.meaning === firstCard.content)
        )
      ) {
        // Match found
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[selectedCards[0]].isMatched = true;
          updatedCards[id].isMatched = true;
          setCards(updatedCards);
          setSelectedCards([]);
          setScore(score + 10);

          if (updatedCards.every(card => card.isMatched)) {
            if (level === 10) {
              toast({
                title: "Congratulations!",
                description: "You've completed all levels! Final score: " + (score + 10),
              });
            } else {
              toast({
                title: "Level Complete!",
                description: "Moving to level " + (level + 1),
              });
              setLevel(level + 1);
            }
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[selectedCards[0]].isFlipped = false;
          updatedCards[id].isFlipped = false;
          setCards(updatedCards);
          setSelectedCards([]);
          setLives(lives - 1);
          
          if (lives <= 1) {
            toast({
              title: "Game Over!",
              description: "You've run out of lives. Final score: " + score,
              variant: "destructive",
            });
            setLevel(1);
            setLives(3);
            setScore(0);
          }
        }, 1000);
      }
    }
  };

  const restartGame = () => {
    setLevel(1);
    setLives(3);
    setScore(0);
    initializeLevel();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-mongol-blue">Level {level}</h2>
        <div className="space-x-4">
          <span className="text-lg">Lives: {"❤️".repeat(lives)}</span>
          <span className="text-lg">Score: {score}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`p-4 h-32 flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 ${
              card.isFlipped ? "bg-white" : "bg-mongol-blue"
            } ${card.isMatched ? "bg-green-100" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            <span className={`text-center text-lg ${
              card.isFlipped ? "text-mongol-blue" : "text-white"
            }`}>
              {card.isFlipped ? card.content : "?"}
            </span>
          </Card>
        ))}
      </div>

      <Button
        onClick={restartGame}
        className="w-full bg-mongol-blue hover:bg-mongol-navy text-white"
      >
        Restart Game
      </Button>
    </div>
  );
};

export default MatchingGame;
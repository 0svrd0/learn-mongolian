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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(sessionStorage.getItem("matchingGameBestScore")) || 0;
  });

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const wordPairs = shuffle(WORDS).slice(0, 8);
    const gameCards = wordPairs.flatMap((word, index) => [
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
    setScore(0);
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
          const newScore = score + 10;
          setScore(newScore);
          
          if (newScore > bestScore) {
            setBestScore(newScore);
            sessionStorage.setItem("matchingGameBestScore", String(newScore));
            toast({
              title: "New High Score!",
              description: `You've achieved a new personal best: ${newScore}`,
            });
          }

          if (updatedCards.every(card => card.isMatched)) {
            toast({
              title: "Congratulations!",
              description: "You've completed the matching game!",
            });
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
          setScore(Math.max(0, score - 2));
        }, 1000);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-mongol-blue">Matching Game</h2>
        <div className="space-x-4">
          <span className="text-lg">Score: {score}</span>
          <span className="text-lg">Best: {bestScore}</span>
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
        onClick={initializeGame}
        className="w-full bg-mongol-blue hover:bg-mongol-navy text-white"
      >
        New Game
      </Button>
    </div>
  );
};

export default MatchingGame;
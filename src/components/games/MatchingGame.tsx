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
    type: "pronunciation" | "meaning";
    isMatched: boolean;
    isSelected: boolean;
  }>>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeLevel();
  }, [level]);

  const initializeLevel = () => {
    const startIndex = (level - 1) * 5; // Reduced to 5 pairs per level for better gameplay
    const levelWords = WORDS.slice(startIndex, startIndex + 5);
    const gameCards = levelWords.flatMap((word, index) => [
      {
        id: index * 2,
        content: word.pronunciation,
        type: "pronunciation" as const,
        isMatched: false,
        isSelected: false,
      },
      {
        id: index * 2 + 1,
        content: word.meaning,
        type: "meaning" as const,
        isMatched: false,
        isSelected: false,
      },
    ]);
    setCards(shuffle(gameCards));
    setSelectedCards([]);
  };

  const handleCardClick = (id: number) => {
    if (selectedCards.length === 2 || cards[id].isMatched) {
      return;
    }

    // Update the selected state of the clicked card
    const updatedCards = cards.map(card => ({
      ...card,
      isSelected: card.id === id ? true : card.isSelected
    }));
    setCards(updatedCards);

    if (selectedCards.length === 0) {
      setSelectedCards([id]);
    } else {
      const firstCard = cards[selectedCards[0]];
      const secondCard = cards[id];
      
      // Check if one card is pronunciation and the other is meaning
      const isValidPair = 
        (firstCard.type === "pronunciation" && secondCard.type === "meaning") ||
        (firstCard.type === "meaning" && secondCard.type === "pronunciation");

      if (isValidPair) {
        // Find the corresponding word in WORDS array
        const isMatch = WORDS.some(word => 
          (word.pronunciation === firstCard.content && word.meaning === secondCard.content) ||
          (word.pronunciation === secondCard.content && word.meaning === firstCard.content)
        );

        setTimeout(() => {
          if (isMatch) {
            // Match found
            toast({
              title: "Correct!",
              description: "You found a matching pair!",
              variant: "default",
            });

            const newCards = cards.map(card => ({
              ...card,
              isMatched: card.id === selectedCards[0] || card.id === id ? true : card.isMatched,
              isSelected: false
            }));
            setCards(newCards);
            setScore(score + 10);

            if (newCards.every(card => card.isMatched)) {
              if (level === 20) {
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
          } else {
            // No match
            toast({
              title: "Incorrect!",
              description: "Try again!",
              variant: "destructive",
            });
            
            const newCards = cards.map(card => ({
              ...card,
              isSelected: false
            }));
            setCards(newCards);
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
              initializeLevel();
            }
          }
          setSelectedCards([]);
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
            className={`p-4 h-32 flex items-center justify-center cursor-pointer transition-all transform hover:scale-105 
              ${card.isMatched ? "bg-green-100" : ""} 
              ${card.isSelected ? "bg-blue-100" : "bg-white"}`}
            onClick={() => handleCardClick(card.id)}
          >
            <span className="text-center text-lg text-mongol-blue">
              {card.content}
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
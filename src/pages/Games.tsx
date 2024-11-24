import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MatchingGame from "@/components/games/MatchingGame";
import SpeedQuiz from "@/components/games/SpeedQuiz";
import WordScramble from "@/components/games/WordScramble";
import SpeedTyping from "@/components/games/SpeedTyping";
import WordChains from "@/components/games/WordChains";
import WordAssociation from "@/components/games/WordAssociation";
import { useState } from "react";

type GameType = "matching" | "speed" | "scramble" | "typing" | "chains" | "association" | null;

const Games = () => {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const games = [
    {
      id: "matching",
      title: "Matching Game",
      description: "Match Mongolian words with their meanings",
      component: MatchingGame,
      color: "bg-mongol-red"
    },
    {
      id: "speed",
      title: "Speed Quiz",
      description: "Test your knowledge against the clock",
      component: SpeedQuiz,
      color: "bg-mongol-gold"
    },
    {
      id: "scramble",
      title: "Word Scramble",
      description: "Unscramble Mongolian words",
      component: WordScramble,
      color: "bg-mongol-grass"
    },
    {
      id: "typing",
      title: "Speed Typing",
      description: "Type Mongolian words as fast as you can",
      component: SpeedTyping,
      color: "bg-mongol-sky"
    },
    {
      id: "chains",
      title: "Word Chains",
      description: "Create chains of words starting with the last letter",
      component: WordChains,
      color: "bg-mongol-earth"
    },
    {
      id: "association",
      title: "Word Association",
      description: "Match words with their correct meanings",
      component: WordAssociation,
      color: "bg-mongol-charcoal"
    }
  ];

  const ActiveGameComponent = activeGame 
    ? games.find(game => game.id === activeGame)?.component 
    : null;

  return (
    <div className="min-h-screen bg-mongol-white p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => {
            setActiveGame(null);
            navigate("/");
          }}
          className="mb-8 bg-mongol-grass hover:bg-mongol-grass/80 text-white"
        >
          Back to Home
        </Button>

        {!activeGame ? (
          <>
            <h1 className="text-4xl font-bold text-mongol-charcoal mb-8">Games</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-semibold text-mongol-charcoal mb-4">
                    {game.title}
                  </h2>
                  <p className="text-mongol-charcoal/80 mb-4">
                    {game.description}
                  </p>
                  <Button 
                    onClick={() => setActiveGame(game.id as GameType)}
                    className={`w-full ${game.color} hover:opacity-90 text-white`}
                  >
                    Play Now
                  </Button>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fadeIn">
            {ActiveGameComponent && <ActiveGameComponent />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
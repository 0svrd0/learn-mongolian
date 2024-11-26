import { Card } from "@/components/ui/card";
import SpeedTyping from "@/components/games/SpeedTyping";
import WordAssociation from "@/components/games/WordAssociation";
import { useState } from "react";

type GameType = "typing" | "association" | null;

const Games = () => {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const games = [
    {
      id: "typing",
      title: "Speed Typing",
      description: "Type English translations as fast as you can",
      component: SpeedTyping,
      color: "bg-white"
    },
    {
      id: "association",
      title: "Word Association",
      description: "Match Mongolian words with their correct meanings",
      component: WordAssociation,
      color: "bg-white"
    }
  ];

  const ActiveGameComponent = activeGame 
    ? games.find(game => game.id === activeGame)?.component 
    : null;

  return (
    <div className="min-h-screen bg-[#2a64ac]">
      <div className="container mx-auto">
        {!activeGame ? (
          <>
            <h1 className="text-4xl font-bold text-white mb-8">Games</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="p-6 hover:shadow-lg transition-shadow bg-[#2a64ac]">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {game.title}
                  </h2>
                  <p className="text-white/80 mb-4">
                    {game.description}
                  </p>
                  <button 
                    onClick={() => setActiveGame(game.id as GameType)}
                    className={`w-full ${game.color} hover:opacity-90 text-[#2a64ac] px-4 py-2 rounded`}
                  >
                    Play Now
                  </button>
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
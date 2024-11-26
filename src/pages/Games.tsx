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
    <div className="min-h-screen bg-[#F5F6FF]">
      <div className="container mx-auto px-4 py-8">
        {!activeGame ? (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Games</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {game.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {game.description}
                  </p>
                  <button 
                    onClick={() => setActiveGame(game.id as GameType)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
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
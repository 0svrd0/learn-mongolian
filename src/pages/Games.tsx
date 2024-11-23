import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate("/")}
          className="mb-8 bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-mongol-blue mb-8">Games</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">
              Matching Game
            </h2>
            <p className="text-gray-600 mb-4">
              Match Mongolian script with their meanings
            </p>
            <Button className="w-full bg-mongol-red hover:bg-red-700 text-white">
              Play Now
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow opacity-50">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">
              Speed Quiz
            </h2>
            <p className="text-gray-600 mb-4">
              Coming soon! Test your knowledge against the clock
            </p>
            <Button className="w-full" disabled>
              Coming Soon
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
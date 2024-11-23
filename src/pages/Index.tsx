import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mongol-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-mongol-blue mb-6">
            MongolLearn
          </h1>
          <p className="text-xl text-mongol-navy mb-12">
            Begin your journey into the beautiful world of Mongolian script
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">Learn</h2>
            <p className="text-gray-600 mb-4">
              Master Mongolian script through interactive lessons
            </p>
            <Button 
              className="w-full bg-mongol-blue hover:bg-mongol-navy text-white"
              onClick={() => navigate("/learn")}
            >
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">Games</h2>
            <p className="text-gray-600 mb-4">
              Practice your skills with fun matching games
            </p>
            <Button 
              className="w-full bg-mongol-red hover:bg-red-700 text-white"
              onClick={() => navigate("/games")}
            >
              Play Games
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">Story</h2>
            <p className="text-gray-600 mb-4">
              Read simple stories in traditional Mongolian script
            </p>
            <Button 
              className="w-full bg-mongol-gold hover:bg-yellow-600 text-white"
              onClick={() => navigate("/story")}
            >
              Read Stories
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
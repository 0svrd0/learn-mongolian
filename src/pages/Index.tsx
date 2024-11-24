import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mongol-sky/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-mongol-earth mb-6">
            MongoLearn
          </h1>
          <p className="text-xl text-mongol-charcoal mb-12">
            Start learning Mongolian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-mongol-white">
            <h2 className="text-2xl font-semibold text-mongol-earth mb-4">Learn vocabulary</h2>
            <p className="text-mongol-charcoal mb-4">
              Master Mongolian through interactive lessons
            </p>
            <Button 
              className="w-full bg-mongol-grass hover:bg-mongol-grass/80 text-mongol-white"
              onClick={() => navigate("/learn")}
            >
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-mongol-white">
            <h2 className="text-2xl font-semibold text-mongol-earth mb-4">Quizzes</h2>
            <p className="text-mongol-charcoal mb-4">
              Practice your skills
            </p>
            <Button 
              className="w-full bg-mongol-red hover:bg-mongol-red/80 text-mongol-white"
              onClick={() => navigate("/games")}
            >
              Play Games
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-mongol-white">
            <h2 className="text-2xl font-semibold text-mongol-earth mb-4">Story</h2>
            <p className="text-mongol-charcoal mb-4">
              Read simple stories with traditional Mongolian script
            </p>
            <Button 
              className="w-full bg-mongol-gold hover:bg-mongol-gold/80 text-mongol-charcoal"
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F6FF]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Start learning Mongolian
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Master essential vocabulary and grammar through interactive lessons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learn vocabulary</h2>
            <p className="text-gray-600 mb-4">
              Master Mongolian through interactive lessons
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/learn")}
            >
              Start Learning
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quizzes</h2>
            <p className="text-gray-600 mb-4">
              Test your knowledge with interactive quizzes
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate("/games")}
            >
              Play Games
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fadeIn bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Story</h2>
            <p className="text-gray-600 mb-4">
              Read simple stories with traditional Mongolian script
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
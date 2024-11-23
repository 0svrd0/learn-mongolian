import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Story = () => {
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

        <h1 className="text-4xl font-bold text-mongol-blue mb-8">Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">
              A Day in Mongolia
            </h2>
            <p className="text-gray-600 mb-4">
              A simple story about daily life in Mongolia
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">5 pages</span>
              <Button className="bg-mongol-gold hover:bg-yellow-600 text-white">
                Read Now
              </Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow opacity-50">
            <h2 className="text-2xl font-semibold text-mongol-blue mb-4">
              The Blue Sky
            </h2>
            <p className="text-gray-600 mb-4">
              Coming soon! A tale about Mongolia's famous blue sky
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">8 pages</span>
              <Button disabled>Coming Soon</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Story;
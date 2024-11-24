import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mongol-sky/10 p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate("/")}
          className="mb-8 bg-mongol-grass hover:bg-mongol-grass/80 text-white"
        >
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-mongol-earth mb-4">Learn Mongolian</h1>
        <p className="text-lg text-mongol-charcoal mb-8">
          Explore the basics of the Mongolian language through interactive lessons and exercises.
        </p>

        {/* Lesson 1: Greetings */}
        <h2 className="text-2xl font-semibold text-mongol-earth mb-2">Lesson 1: Greetings</h2>
        <p className="text-md text-mongol-charcoal mb-4">
          Learn how to greet people and introduce yourself in Mongolian.
        </p>
        <Button 
          onClick={() => navigate("/lesson/1")}
          className="bg-mongol-blue hover:bg-mongol-blue/80 text-white mb-4"
        >
          Start Lesson 1
        </Button>

        {/* Lesson 2: Numbers and Time */}
        <h2 className="text-2xl font-semibold text-mongol-earth mb-2">Lesson 2: Numbers and Time</h2>
        <p className="text-md text-mongol-charcoal mb-4">
          Understand numbers and how to tell time in Mongolian.
        </p>
        <Button 
          onClick={() => navigate("/lesson/2")}
          className="bg-mongol-blue hover:bg-mongol-blue/80 text-white mb-4"
        >
          Start Lesson 2
        </Button>

        {/* Lesson 3: Family */}
        <h2 className="text-2xl font-semibold text-mongol-earth mb-2">Lesson 3: Family</h2>
        <p className="text-md text-mongol-charcoal mb-4">
          Learn vocabulary related to family members in Mongolian.
        </p>
        <Button 
          onClick={() => navigate("/lesson/3")}
          className="bg-mongol-blue hover:bg-mongol-blue/80 text-white mb-4"
        >
          Start Lesson 3
        </Button>

        {/* Lesson 4: Food and Drink */}
        <h2 className="text-2xl font-semibold text-mongol-earth mb-2">Lesson 4: Food and Drink</h2>
        <p className="text-md text-mongol-charcoal mb-4">
          Discover vocabulary related to food and drink in Mongolian.
        </p>
        <Button 
          onClick={() => navigate("/lesson/4")}
          className="bg-mongol-blue hover:bg-mongol-blue/80 text-white mb-4"
        >
          Start Lesson 4
        </Button>

        {/* Add more lessons as needed */}
      </div>
    </div>
  );
};

export default Learn;

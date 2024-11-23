import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      title: "Greetings and Basics",
      description: "Learn how to say hello and introduce yourself",
      completed: false,
    },
    {
      id: 2,
      title: "Numbers and Time",
      description: "Learn essential numbers and time-related vocabulary",
      completed: false,
    },
    {
      id: 3,
      title: "Family",
      description: "Learn words related to family members and relationships",
      completed: false,
    },
    {
      id: 4,
      title: "Food and Drink",
      description: "Learn vocabulary for different foods and beverages",
      completed: false,
    },
    {
      id: 5,
      title: "Colors",
      description: "Learn how to say different colors in Mongolian",
      completed: false,
    },
    {
      id: 6,
      title: "Nature",
      description: "Learn words related to nature and the environment",
      completed: false,
    },
    {
      id: 7,
      title: "Transportation",
      description: "Learn vocabulary for different modes of transport",
      completed: false,
    },
    {
      id: 8,
      title: "Shopping",
      description: "Learn essential shopping and payment vocabulary",
      completed: false,
    },
    {
      id: 9,
      title: "Weather",
      description: "Learn words to describe weather conditions",
      completed: false,
    },
    {
      id: 10,
      title: "Daily Activities",
      description: "Learn vocabulary for everyday actions and routines",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate("/")}
          className="mb-8 bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-mongol-blue mb-8">Lessons</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.id}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white"
              onClick={() => navigate(`/lesson/${lesson.id}`)}
            >
              <h2 className="text-2xl font-semibold text-mongol-blue mb-4">
                {lesson.title}
              </h2>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${lesson.completed ? "text-green-500" : "text-gray-400"}`}>
                  {lesson.completed ? "Completed" : "Not started"}
                </span>
                <Button className="bg-mongol-blue hover:bg-mongol-navy text-white">
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
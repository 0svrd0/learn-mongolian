import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      number: 1,
      title: "Greetings",
      description: "Learn how to greet people and introduce yourself in Mongolian."
    },
    {
      number: 2,
      title: "Numbers and Time",
      description: "Understand numbers and how to tell time in Mongolian."
    },
    {
      number: 3,
      title: "Family",
      description: "Learn vocabulary related to family members in Mongolian."
    },
    {
      number: 4,
      title: "Food and Drink",
      description: "Discover vocabulary related to food and drink in Mongolian."
    },
    {
      number: 5,
      title: "Colors",
      description: "Learn essential color vocabulary in Mongolian."
    },
    {
      number: 6,
      title: "Nature",
      description: "Explore nature-related vocabulary in Mongolian."
    },
    {
      number: 7,
      title: "Transportation",
      description: "Learn words related to different modes of transportation."
    },
    {
      number: 8,
      title: "Shopping",
      description: "Master essential shopping vocabulary in Mongolian."
    },
    {
      number: 9,
      title: "Weather",
      description: "Learn how to talk about weather in Mongolian."
    },
    {
      number: 10,
      title: "Daily Activities",
      description: "Discover vocabulary for common daily activities."
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <div key={lesson.number} className="space-y-2">
              <h2 className="text-2xl font-semibold text-mongol-earth">
                Lesson {lesson.number}: {lesson.title}
              </h2>
              <p className="text-md text-mongol-charcoal">
                {lesson.description}
              </p>
              <Button 
                onClick={() => navigate(`/lesson/${lesson.number}`)}
                className="bg-mongol-blue hover:bg-mongol-blue/80 text-white"
              >
                Start Lesson {lesson.number}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
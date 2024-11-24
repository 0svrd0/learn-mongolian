import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
    },
    {
      number: 11,
      title: "Body Parts",
      description: "Learn vocabulary for different parts of the body in Mongolian."
    },
    {
      number: 12,
      title: "Emotions",
      description: "Express feelings and emotions in Mongolian."
    },
    {
      number: 13,
      title: "Occupations",
      description: "Learn about different professions and jobs in Mongolian."
    },
    {
      number: 14,
      title: "Clothing",
      description: "Discover vocabulary for different types of clothing."
    },
    {
      number: 15,
      title: "Animals",
      description: "Learn names of various animals in Mongolian."
    },
    {
      number: 16,
      title: "Technology",
      description: "Master modern technology vocabulary in Mongolian."
    },
    {
      number: 17,
      title: "Hobbies",
      description: "Learn vocabulary related to different hobbies and activities."
    },
    {
      number: 18,
      title: "Travel",
      description: "Essential vocabulary for traveling in Mongolia."
    },
    {
      number: 19,
      title: "Shapes and Sizes",
      description: "Learn about different shapes and sizes in Mongolian."
    },
    {
      number: 20,
      title: "Verbs",
      description: "Master essential verbs in Mongolian."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mongol-sky/5 to-mongol-sky/20 p-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Button 
            onClick={() => navigate("/")}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold text-mongol-earth mb-6 tracking-tight">
            Learn Mongolian
          </h1>
          <p className="text-xl text-mongol-charcoal/80">
            Explore the basics of the Mongolian language through interactive lessons and exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.number} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-mongol-sky/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mongol-sky/10 text-mongol-earth font-semibold">
                  {lesson.number}
                </div>
                <div>
                  <h2  className="text-xl font-semibold text-mongol-earth">
                    {lesson.title}
                  </h2>
                  <p className="text-sm text-mongol-charcoal/70 mt-1">
                    {lesson.description}
                  </p>
                </div>
              </div>
              <Button 
                onClick={() => navigate(`/lesson/${lesson.number}`)}
                className="w-full bg-mongol-grass hover:bg-mongol-grass/90 text-white"
              >
                Start Lesson
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
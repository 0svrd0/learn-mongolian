import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import LessonCard from "@/components/LessonCard";
import { 
  LESSON1_WORDS, 
  LESSON2_WORDS,
  LESSON3_WORDS,
  LESSON4_WORDS,
  LESSON5_WORDS,
  LESSON6_WORDS,
  LESSON7_WORDS,
  LESSON8_WORDS,
  LESSON9_WORDS,
  LESSON10_WORDS,
  LESSON11_WORDS,
  LESSON12_WORDS,
  LESSON13_WORDS,
  LESSON14_WORDS,
  LESSON15_WORDS,
  LESSON16_WORDS,
  LESSON17_WORDS,
  LESSON18_WORDS,
  LESSON19_WORDS,
  LESSON20_WORDS
} from "@/data/vocabulary";

const Learn = () => {
  const lessons = [
    {
      number: 1,
      title: "Greetings",
      description: "Learn how to greet people and introduce yourself in Mongolian.",
      words: LESSON1_WORDS
    },
    {
      number: 2,
      title: "Numbers and Time",
      description: "Understand numbers and how to tell time in Mongolian.",
      words: LESSON2_WORDS
    },
    {
      number: 3,
      title: "Family",
      description: "Learn vocabulary related to family members and relationships.",
      words: LESSON3_WORDS
    },
    {
      number: 4,
      title: "Food and Drinks",
      description: "Learn vocabulary for different foods and beverages.",
      words: LESSON4_WORDS
    },
    {
      number: 5,
      title: "Colors",
      description: "Learn colors and related descriptive terms in Mongolian.",
      words: LESSON5_WORDS
    },
    {
      number: 6,
      title: "Nature Extended",
      description: "Learn more words about nature and natural phenomena.",
      words: LESSON6_WORDS
    },
    {
      number: 7,
      title: "Transportation",
      description: "Learn vocabulary related to different modes of transport.",
      words: LESSON7_WORDS
    },
    {
      number: 8,
      title: "Shopping",
      description: "Learn essential vocabulary for shopping and transactions.",
      words: LESSON8_WORDS
    },
    {
      number: 9,
      title: "Weather",
      description: "Learn vocabulary related to weather and climate.",
      words: LESSON9_WORDS
    },
    {
      number: 10,
      title: "Daily Activities",
      description: "Learn essential verbs for daily activities in Mongolian.",
      words: LESSON10_WORDS
    },
    {
      number: 11,
      title: "Body Parts",
      description: "Learn vocabulary for different parts of the body.",
      words: LESSON11_WORDS
    },
    {
      number: 12,
      title: "Emotions",
      description: "Learn how to express different emotions in Mongolian.",
      words: LESSON12_WORDS
    },
    {
      number: 13,
      title: "Occupations",
      description: "Learn about different professions and jobs in Mongolian.",
      words: LESSON13_WORDS
    },
    {
      number: 14,
      title: "Clothing",
      description: "Discover vocabulary for different types of clothing.",
      words: LESSON14_WORDS
    },
    {
      number: 15,
      title: "Animals",
      description: "Learn names of various animals in Mongolian.",
      words: LESSON15_WORDS
    },
    {
      number: 16,
      title: "Technology",
      description: "Master modern technology vocabulary in Mongolian.",
      words: LESSON16_WORDS
    },
    {
      number: 17,
      title: "Hobbies",
      description: "Learn vocabulary related to different hobbies and activities.",
      words: LESSON17_WORDS
    },
    {
      number: 18,
      title: "Travel",
      description: "Essential vocabulary for traveling in Mongolia.",
      words: LESSON18_WORDS
    },
    {
      number: 19,
      title: "Shapes and Sizes",
      description: "Learn about different shapes and sizes in Mongolian.",
      words: LESSON19_WORDS
    },
    {
      number: 20,
      title: "Verbs",
      description: "Master essential verbs in Mongolian.",
      words: LESSON20_WORDS
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mongol-sky/5 to-mongol-sky/20 p-8">
      <div className="container mx-auto">
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
            <LessonCard key={lesson.number} {...lesson} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;

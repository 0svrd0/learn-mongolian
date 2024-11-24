Share


You said:
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const GREETINGS = [
  { mongolian: "Сайн уу", pronunciation: "Sain uu", meaning: "Hello" },
  { mongolian: "Сайн байна уу", pronunciation: "Sain baina uu", meaning: "How are you?" },
  { mongolian: "Баярлалаа", pronunciation: "Bayarlalaa", meaning: "Thank you" },
  { mongolian: "Үгүй", pronunciation: "Ügüi", meaning: "No" },
  { mongolian: "Тийм", pronunciation: "Tiim", meaning: "Yes" },
  { mongolian: "Сайн", pronunciation: "Sain", meaning: "Good" },
  { mongolian: "Буруу", pronunciation: "Buruu", meaning: "Wrong" },
  { mongolian: "Зөв", pronunciation: "Zöv", meaning: "Correct" },
  { mongolian: "Тавтай морил", pronunciation: "Tavtai moril", meaning: "Welcome" },
  { mongolian: "Баяртай", pronunciation: "Bayartai", meaning: "Goodbye" },
  { mongolian: "Уучлаарай", pronunciation: "Uuchlaarai", meaning: "Sorry" },
  { mongolian: "Ойлгосон", pronunciation: "Oilgoson", meaning: "Understood" },
  { mongolian: "Ойлгохгүй", pronunciation: "Oiloghui", meaning: "I don't understand" },
  { mongolian: "Нэр", pronunciation: "Ner", meaning: "Name" },
  { mongolian: "Би", pronunciation: "Bi", meaning: "I" },
  { mongolian: "Чи", pronunciation: "Chi", meaning: "You" },
  { mongolian: "Тэр", pronunciation: "Ter", meaning: "He/She" },
  { mongolian: "Бид", pronunciation: "Bid", meaning: "We" },
  { mongolian: "Та", pronunciation: "Ta", meaning: "Formal 'You'" },
  { mongolian: "Яах вэ", pronunciation: "Yaakh ve?", meaning: "What to do?" }
];

const Lesson1 = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playAudio = () => {
    setIsAudioPlaying(true);
    // Audio implementation will be added in future updates
    setTimeout(() => setIsAudioPlaying(false), 2000);
    toast({
      title: "Playing audio...",
      description: "Audio feature coming soon!",
    });
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % GREETINGS.length);
  };

  const previousWord = () => {
    setCurrentWordIndex((prev) => (prev - 1 + GREETINGS.length) % GREETINGS.length);
  };

  const currentWord = GREETINGS[currentWordIndex];

  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate("/learn")}
          className="mb-8 bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          Back to Lessons
        </Button>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-mongol-blue mb-4">
              Lesson 1: Greetings and Basics
            </h1>
            <p className="text-gray-600 mb-6">
              Learn essential Mongolian greetings and basic phrases
            </p>

            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full max-w-md aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Learning scene"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <p className="text-white text-4xl font-bold text-center">
                    {currentWord.mongolian}
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 w-full max-w-md">
                <p className="text-xl font-medium">
                  Pronunciation: "{currentWord.pronunciation}"
                </p>
                <p className="text-lg text-gray-600">
                  Meaning: {currentWord.meaning}
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    onClick={playAudio}
                    disabled={isAudioPlaying}
                    className="bg-mongol-gold hover:bg-yellow-600 text-white"
                  >
                    {isAudioPlaying ? "Playing..." : "Listen"}
                  </Button>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={previousWord}
                    variant="outline"
                    className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
                  >
                    Previous Word
                  </Button>
                  <Button
                    onClick={nextWord}
                    variant="outline"
                    className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
                  >
                    Next Word
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/learn")}
            className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
          >
            Back to Lessons
          </Button>
          <Button
            onClick={() => navigate("/lesson/1/quiz")}
            className="bg-mongol-blue hover:bg-mongol-navy text-white"
          >
            Take Quiz
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">
            Progress: {currentWordIndex + 1} / {GREETINGS.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson1
